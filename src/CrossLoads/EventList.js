import _ from 'lodash';

const ClipboardEventList = [
  `onCopy`
  , `onCut`
  , `onPaste`
];
const CompositionList = [
  `onCompositionEnd`
  , `onCompositionStart`
  , `onCompositionUpdate`
]


const KeyboardEventList = [
  `onKeyDown`
  , `onKeyPress`
  , `onKeyUp`
];


const FocusEventList = [
  `onFocus`
  , `onBlur`
];

const FormEventList = [
  `onChange`
  , `onInput`
  , `onSubmit`
];

const MouseEventList = [
  `onClick`
  , `onContextMenu`
  , `onDoubleClick`
  , `onDrag`
  , `onDragEnd`
  , `onDragEnter`
  , `onDragExit`
  , `onDragLeave`
  , `onDragOver`
  , `onDragStart`
  , `onDrop`
  , `onMouseDown`
  , `onMouseEnter`
  , `onMouseLeave`
  , `onMouseMove`
  , `onMouseOut`
  , `onMouseOver`
  , `onMouseUp`
];

const SelectionEventList = [`onSelect`];

const TouchEventList = [
  `onTouchCancel`
  , `onTouchEnd`
  , `onTouchMove`
  , `onTouchStart`
];

const UIEventList = [`onScroll`];

const MouseWheelEventList = [`onWheel`];

const MediaEventList = [
  `onAbort`
  , `onCanPlay`
  , `onCanPlayThrough`
  , `onDurationChange`
  , `onEmptied`
  , `onEncrypted`
  , `onEnded`
  , `onError`
  , `onLoadedData`
  , `onLoadedMetadata`
  , `onLoadStart`
  , `onPause`
  , `onPlay`
  , `onPlaying`
  , `onProgress`
  , `onRateChange`
  , `onSeeked`
  , `onSeeking`
  , `onStalled`
  , `onSuspend`
  , `onTimeUpdate`
  , `onVolumeChange`
  , `onWaiting`
];

const ImageEventList = [
  `onLoad`
  , `onError`
];

const AnimationEventList = [
  `onAnimationStart`
  , `onAnimationEnd`
  , `onAnimationIteration`
];

const TransitionEventList = [`onTransitionEnd`];



const EventList = _.flattenDeep(
  [ClipboardEventList
    , CompositionList
    , KeyboardEventList
    , FocusEventList
    , FormEventList
    , MouseEventList
    , SelectionEventList
    , TouchEventList
    , UIEventList
    , MouseWheelEventList
    , MediaEventList
    , ImageEventList
    , AnimationEventList
    , TransitionEventList]
);

export {
  EventList
  , ClipboardEventList
  , CompositionList
  , KeyboardEventList
  , FocusEventList
  , FormEventList
  , MouseEventList
  , SelectionEventList
  , TouchEventList
  , UIEventList
  , MouseWheelEventList
  , MediaEventList
  , ImageEventList
  , AnimationEventList
  , TransitionEventList

}












