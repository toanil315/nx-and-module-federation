import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import { join } from 'path';
import { CreateGeneratorSchema } from './schema';
import { readdir, stat } from 'fs/promises';
import { existsSync } from 'fs';

export async function createGenerator(
  tree: Tree,
  options: CreateGeneratorSchema
) {
  const appRoot = 'apps';
  const projectRoot = `${appRoot}/${options.name}`;
  let port = 8000;

  if (existsSync(appRoot)) {
    const filesAndDirectories = await readdir(appRoot);
    for (let name of filesAndDirectories) {
      if (name === options.name) {
        throw new Error('App with the same name already exists');
      }
      const statInfo = await stat(join(appRoot, name));
      if (statInfo.isDirectory()) {
        port++;
      }
    }
  }

  generateFiles(tree, join(__dirname, 'files/remote-template'), projectRoot, {
    ...options,
    port,
  });

  await formatFiles(tree);
}

export default createGenerator;
