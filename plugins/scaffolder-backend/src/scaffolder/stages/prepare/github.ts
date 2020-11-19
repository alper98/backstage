/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import os from 'os';
import fs from 'fs-extra';
import path from 'path';
import { TemplateEntityV1alpha1 } from '@backstage/catalog-model';
import { parseLocationAnnotation } from '../helpers';
import { InputError } from '@backstage/backend-common';
import { PreparerBase, PreparerOptions } from './types';
import GitUriParser from 'git-url-parse';
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';

export class GithubPreparer implements PreparerBase {
  token?: string;

  constructor(params: { token?: string } = {}) {
    this.token = params.token;
  }

  async prepare(
    template: TemplateEntityV1alpha1,
    opts: PreparerOptions,
  ): Promise<string> {
    const { protocol, location } = parseLocationAnnotation(template);
    const workingDirectory = opts?.workingDirectory ?? os.tmpdir();
    const { token } = this;

    if (!['github', 'url'].includes(protocol)) {
      throw new InputError(
        `Wrong location protocol: ${protocol}, should be 'url'`,
      );
    }
    const templateId = template.metadata.name;

    const parsedGitLocation = GitUriParser(location);
    const repositoryCheckoutUrl = parsedGitLocation.toString('https');
    const tempDir = await fs.promises.mkdtemp(
      path.join(workingDirectory, templateId),
    );

    const templateDirectory = path.join(
      `${path.dirname(parsedGitLocation.filepath)}`,
      template.spec.path ?? '.',
    );

    console.warn(repositoryCheckoutUrl);
    const finalplace = path.resolve(tempDir, templateDirectory);
    try {
      await git.clone({
        fs: require('fs'),
        http,
        url: repositoryCheckoutUrl,
        dir: finalplace,
        // corsProxy: 'https://cors.isomorphic-git.org',
        singleBranch: true,
        // need this header
        headers: {
          'user-agent': 'git/@isomorphic-git/cors-proxy',
        },
        depth: 1,
      });
      // onAuth: () => ({ username: token, password: 'x-oauth-basic' }),
    } catch (ex) {
      console.warn(ex.data.url);
      console.warn({
        fs: require('fs'),
        http,
        url: repositoryCheckoutUrl,
        dir: templateDirectory,
        depth: 1,
        onAuth: () => ({ username: token, password: 'x-oauth-basic' }),
      });
      throw ex;
    }

    return finalplace;
  }
}
