// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * @module core/HOST
 */

export { default as Utils } from './Utils';
export { default as MathUtils } from './MathUtils';
export { default as Deferred } from './Deferred';
export { env } from './HostEnvironment';
export { default as CoreMessenger } from './Messenger';
export { default as CoreHostObject } from './HostObject';
export { default as LipsyncFeature, 
  DefaultVisemeMap } from './LipsyncFeature';
export  { default as GestureFeature,
  DefaultGestureWords } from './GestureFeature';
export { default as CorePointOfInterestFeature, 
  AxisMap } from './PointOfInterestFeature';

export { default as CoreAnimationFeature } from './animpack';
export { default as AnimationLayer } from './animpack';
export { default as CoreSingleState } from './animpack';
export { default as TransitionState } from './animpack';
export { default as FreeBlendState } from './animpack';
export { default as QueueState } from './animpack';
export { default as RandomAnimationState } from './animpack';
export { default as Blend1dState } from './animpack';
export { default as Blend2dState } from './animpack';
export { default as AnimationUtils } from './animpack';
export { default as Easing } from './animpack';
export { default as LayerBlendModes } from './animpack';
export { default as DefaultLayerBlendMode } from './animpack';
export { default as AnimationTypes } from './animpack';

export { default as CoreTextToSpeechFeature } from './awspack';
export { default as TextToSpeechUtils } from './awspack';
export { default as CoreSpeech } from './awspack';
