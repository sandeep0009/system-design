enum LEVELS {
	DEBUG,
	INFO,
	WARN,
	ERROR,
	FATAL
}

export class Logger {
	private static instance: Logger;
	private level: LEVELS = LEVELS.INFO; 

	private constructor() {}

	public static getInstance(): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger();
		}
		return Logger.instance;
	}

	public setLogLevel(level: LEVELS): void {
		this.level = level;
	}

	public log(level: LEVELS, message: string): void {
		if (level >= this.level) {
			console.log(`[${LEVELS[level]}] ${message}`);
		}
	}
}
