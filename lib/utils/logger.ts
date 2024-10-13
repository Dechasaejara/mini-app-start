import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';

enum LogLevel {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

class Logger {
    private logFilePath: string;

    constructor() {
        // Define the log file path
        this.logFilePath = path.join(__dirname, 'application.log');
    }

    private formatMessage(level: LogLevel, message: string): string {
        const timestamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
        return `[${timestamp}] [${level}] ${message}`;
    }

    private writeLog(level: LogLevel, message: string): void {
        const formattedMessage = this.formatMessage(level, message);
        console.log(formattedMessage); // Log to console

        // Append log to file
        fs.appendFileSync(this.logFilePath, formattedMessage + '\n', { encoding: 'utf8' });
    }

    public info(message:unknown): void {
        this.writeLog(LogLevel.INFO, message as string);
    }

    public warn(message: string): void {
        this.writeLog(LogLevel.WARN, message);
    }

    public error(dev: string, sys: unknown): void {
        this.writeLog(LogLevel.ERROR, `${dev} ====>  ${sys}`);
    }
}

export default new Logger();