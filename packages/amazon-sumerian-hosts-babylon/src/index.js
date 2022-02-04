// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * @module babylon/HOST
 */

import Utils from '@amazon-sumerian-hosts/core';
import MathUtils from '@amazon-sumerian-hosts/core';
import Deferred from '@amazon-sumerian-hosts/core';
import LipsyncFeature, {DefaultVisemeMap} from '@amazon-sumerian-hosts/core';
import GestureFeature, {DefaultGestureWords} from '@amazon-sumerian-hosts/core';
import PointOfInterestFeature, {AxisMap} from './Babylon.js/PointOfInterestFeature';
import {env} from './Babylon.js/HostEnvironment';
import Messenger from './Babylon.js/Messenger';
import HostObject from './Babylon.js/HostObject';

import aws from './Babylon.js/awspack';
import anim from './Babylon.js/animpack';

export default {
  /**
   * @see env
   */
  env,
  /**
   * @see Utils
   */
  Utils,
  /**
   * @see MathUtils
   */
  MathUtils,
  /**
   * @see Deferred
   */
  Deferred,
  /**
   * @see Babylon.js/Messenger
   */
  Messenger,
  /**
   * @see Babylon.js/HostObject
   */
  HostObject,
  /**
   * @see core/LipsyncFeature
   */
  LipsyncFeature,
  /**
   * @see GestureFeature
   */
  GestureFeature,
  /**
   * @see Babylon.js/PointOfInterestFeature
   */
  PointOfInterestFeature,
  /**
   * @see DefaultVisemeMap
   */
  DefaultVisemeMap,
  /**
   * @see DefaultGestureWords
   */
  DefaultGestureWords,
  /**
   * @see AxisMap
   */
  AxisMap,
  /**
   * @see module:babylon/awspack
   */
  aws,
  /**
   * @see module:babylon/animpack
   */
  anim,
};
