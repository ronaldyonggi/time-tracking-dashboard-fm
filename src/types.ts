export type Timeframe = 'daily' | 'weekly' | 'monthly';

export interface TimeframeData {
    current: number;
    previous: number;
}

export interface ActivityData {
    title: string;
    timeframes: {
        [key in Timeframe ]: TimeframeData;
    }
}