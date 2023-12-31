import { Options } from 'tsup';

export const tsupConfig: Options = {
  target: 'esnext',
  clean: true,
  dts: true,
  keepNames: true,
  minify: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  format: ['cjs', 'esm']
};
