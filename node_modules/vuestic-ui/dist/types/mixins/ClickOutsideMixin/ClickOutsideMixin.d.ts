import { Vue } from 'vue-class-component';
export declare type ClickOutsideOptions = {
    disabled: boolean;
    trigger: 'click' | 'mousedown' | 'mouseup';
    onClickOutside: (e: Event | undefined) => void;
};
declare class ClickOutsideMixin extends Vue {
    private preventMouseRootTrigger;
    handleMouse(e: MouseEvent, options: ClickOutsideOptions): void;
    handleMouseCapture(e: MouseEvent, target: Element): void;
    registerClickOutsideEvents(target: Element | undefined, options: ClickOutsideOptions): (...args: any[]) => void;
}
export default ClickOutsideMixin;
