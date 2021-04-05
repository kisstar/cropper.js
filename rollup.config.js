import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import pkg from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

export default {
  input: 'src/js/index.ts',
  output: [
    isProduction && { file: pkg.module, format: 'es', sourcemap: true },
    {
      file: pkg.main,
      name: 'cropper',
      format: 'umd',
      sourcemap: true,
    },
  ].filter(Boolean),
  watch: {
    include: 'src/js/**',
  },
  plugins: [
    typescript(),
    json(),
    commonjs(),
    nodeResolve(),
    isDevelopment && serve({ open: true, contentBase: ['dist', 'public'] }),
  ].filter(Boolean),
};
