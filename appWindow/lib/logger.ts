import winston, { format } from "winston";
import { LOG_CONFIG, USER_DATA } from "Environment";
import dateformat from "dateformat";

const tsFormat = () => dateformat(new Date(), "UTC:yyyy-mm-dd'T'HH:MM:ss.l'Z'");

const internalLogger = winston.createLogger({
  level: LOG_CONFIG.level,
  //format: winston.format.json(),
  //format: winston.format.json(),
  format: winston.format.combine(
    winston.format.json({ replacer: replaceErrors })
  ),
  transports: [
    new winston.transports.File({
      filename: `${USER_DATA}/combined.log`
    }),
    new winston.transports.File({
      filename: `${USER_DATA}/error.log`,
      level: "error"
    }),
    new winston.transports.Console({
      level: "error"
    })
  ]
});

if (process.env.NODE_ENV !== "production") {
  internalLogger.add(
    new winston.transports.Console({
      level: LOG_CONFIG.level
    })
  );
}

function replaceErrors(key, value) {
  if (value instanceof Buffer) {
    return value.toString("base64");
  } else if (value instanceof Error) {
    var error = {};

    Object.getOwnPropertyNames(value).forEach(function(key) {
      error[key] = value[key];
    });

    return error;
  }

  return value;
}

export default class Logger {
  private logCategory: string;

  constructor(category: string) {
    //
    // If we're not in production then log to the `console` with the format:
    // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
    //
    this.logCategory = category;
  }

  info(message, data?) {
    internalLogger.info({
      timestamp: tsFormat(),
      logCategory: this.logCategory,
      message,
      data: data || ""
    });
  }

  debug(message, data?) {
    internalLogger.debug({
      timestamp: tsFormat(),
      logCategory: this.logCategory,
      message,
      data: data || ""
    });
  }

  verbose(message, data?) {
    internalLogger.verbose({
      timestamp: tsFormat(),
      logCategory: this.logCategory,
      message,
      data: data || ""
    });
  }

  error(message, data?) {
    internalLogger.error({
      timestamp: tsFormat(),
      logCategory: this.logCategory,
      message,
      data: data || ""
    });
  }

  warn(message, data?) {
    internalLogger.warn({
      timestamp: tsFormat(),
      logCategory: this.logCategory,
      message,
      data: data || ""
    });
  }
}
