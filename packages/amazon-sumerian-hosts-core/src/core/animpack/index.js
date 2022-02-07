// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * @module core/animpack
 */

import {
  Linear,
  Quadratic,
  Cubic,
  Quartic,
  Quintic,
  Sinusoidal,
  Exponential,
  Circular,
  Elastic,
  Back,
  Bounce,
} from './Easing';

export { default as CoreAnimationFeature,
  AnimationTypes } from './AnimationFeature';
  export { default as AnimationLayer,
  LayerBlendModes,
  DefaultLayerBlendMode,
} from './AnimationLayer';
export { default as CoreSingleState } from './state/SingleState';
export { default as TransitionState } from './state/TransitionState';
export { default as FreeBlendState } from './state/FreeBlendState';
export { default as QueueState } from './state/QueueState';
export { default as RandomAnimationState } from './state/RandomAnimationState';
export { default as Blend1dState } from './state/Blend1dState';
export { default as Blend2dState } from './state/Blend2dState';
export { default as AnimationUtils } from './AnimationUtils';

/**
 * @namespace
 */
const Easing = {
  /**
   * @see Linear
   */
  Linear,
  /**
   * @see Quadratic
   */
  Quadratic,
  /**
   * @see Cubic
   */
  Cubic,
  /**
   * @see Quartic
   */
  Quartic,
  /**
   * @see Quintic
   */
  Quintic,
  /**
   * @see Sinusoidal
   */
  Sinusoidal,
  /**
   * @see Exponential
   */
  Exponential,
  /**
   * @see Circular
   */
  Circular,
  /**
   * @see Elastic
   */
  Elastic,
  /**
   * @see Back
   */
  Back,
  /**
   * @see Bounce
   */
  Bounce,
};

export { Easing };