import Logger from './logger'
const logger = new Logger('loadThemes');

/**
 * Load all available themes
 *
 * @return {Array<Object>} Array of objects {value, label}.
 *                         Label is text that is shown in preferences theme selector
 */
export default () => {
  const isHot = parseInt(process.env.HOT) == 1

  console.log("process.env.HOT: " + process.env.HOT);

  console.log("process.env.HOT: " + (isHot));
  console.log("process.env.NODE_ENV: " + process.env.NODE_ENV);
  const prefix = isHot ? 'http://localhost:3000/' : '../'
  logger.info('Theme prefix', {prefix, hot: process.env});
  return [
    {
      value: `${prefix}dist/css/themes/light.css`,
      label: 'Light'
    },
    {
      value: `${prefix}dist/css/themes/dark.css`,
      label: 'Dark'
    }
  ]
}
