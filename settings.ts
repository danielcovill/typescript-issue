export class Settings {

    public constructor() {
    }

    public settingsInitialized(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }
}

