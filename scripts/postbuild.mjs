import { copyFile } from 'node:fs/promises'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')

await copyFile(join(dist, 'index.html'), join(dist, '404.html'))
await copyFile(join(process.cwd(), 'hosting', '.htaccess'), join(dist, '.htaccess'))

console.log('Postbuild: copied 404.html and .htaccess into dist/')
