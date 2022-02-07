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

export { CoreAnimationFeature,
  AnimationLayer, 
  CoreSingleState,
  TransitionState,
  FreeBlendState,
  QueueState,
  RandomAnimationState,
  Blend1dState,
  Blend2dState,
  AnimationUtils,
  Easing,
  LayerBlendModes,
  DefaultLayerBlendMode,
  AnimationTypes } from './animpack/index';

export { CoreTextToSpeechFeature,
  TextToSpeechUtils,
  CoreSpeech } from './awspack/index';
export { default as AbstractSpeech } from './awspack/AbstractSpeech';
export { default as AbstractTextToSpeechFeature } from './awspack/AbstractTextToSpeechFeature';
