import { Vue } from 'vue-class-component';
export declare type State = {
    isTopAffixed: boolean;
    isBottomAffixed: boolean;
    width?: number;
};
declare type Coordinates = {
    top: number;
    bottom: number;
};
declare type ValuesToComputeAffixedState = {
    coordinates: Coordinates;
    offsetTop?: number;
    offsetBottom?: number;
    target: HTMLElement | Window | undefined;
};
export declare function getWindowHeight(): number;
export declare function computeAffixedState({ coordinates, offsetTop, offsetBottom, target, }: ValuesToComputeAffixedState): State;
export declare type Context = {
    offsetTop?: number;
    offsetBottom?: number;
    element: Vue | Element | Vue[] | Element[];
    target: HTMLElement | Window | undefined;
    setState: (state: State) => void;
    getState: () => State;
    initialPosition?: ClientRect;
};
export declare function handleThrottledEvent(eventName: string | null, context: Context): void;
declare type Options = {
    handler: (eventName: string, event: Event) => void;
    useCapture?: (eventName: string) => boolean;
    wait?: number;
};
export declare function useEventsHandlerWithThrottle(events: string[], { handler, useCapture, wait, }: Options): () => void;
export {};
