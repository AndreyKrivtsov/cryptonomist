export const pairContract = {
    abi: {
        'ABI version': 2,
        'version': '2.2',
        'header': ['pubkey', 'time', 'expire'],
        'functions': [
            {
                'name': 'constructor',
                'inputs': [],
                'outputs': []
            },
            {
                'name': 'buildExchangePayload',
                'inputs': [
                    { 'name': 'id', 'type': 'uint64' },
                    { 'name': 'deploy_wallet_grams', 'type': 'uint128' },
                    { 'name': 'expected_amount', 'type': 'uint128' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'cell' }
                ]
            },
            {
                'name': 'buildExchangePayloadV2',
                'inputs': [
                    { 'name': '_id', 'type': 'uint64' },
                    { 'name': '_deployWalletGrams', 'type': 'uint128' },
                    { 'name': '_expectedAmount', 'type': 'uint128' },
                    { 'name': '_recipient', 'type': 'address' },
                    { 'name': '_referrer', 'type': 'address' },
                    { 'name': '_successPayload', 'type': 'optional(cell)' },
                    { 'name': '_cancelPayload', 'type': 'optional(cell)' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'cell' }
                ]
            },
            {
                'name': 'buildDepositLiquidityPayload',
                'inputs': [
                    { 'name': 'id', 'type': 'uint64' },
                    { 'name': 'deploy_wallet_grams', 'type': 'uint128' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'cell' }
                ]
            },
            {
                'name': 'buildDepositLiquidityPayloadV2',
                'inputs': [
                    { 'name': '_id', 'type': 'uint64' },
                    { 'name': '_deployWalletGrams', 'type': 'uint128' },
                    { 'name': '_expectedAmount', 'type': 'uint128' },
                    { 'name': '_recipient', 'type': 'address' },
                    { 'name': '_referrer', 'type': 'address' },
                    { 'name': '_successPayload', 'type': 'optional(cell)' },
                    { 'name': '_cancelPayload', 'type': 'optional(cell)' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'cell' }
                ]
            },
            {
                'name': 'buildWithdrawLiquidityPayload',
                'inputs': [
                    { 'name': 'id', 'type': 'uint64' },
                    { 'name': 'deploy_wallet_grams', 'type': 'uint128' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'cell' }
                ]
            },
            {
                'name': 'buildWithdrawLiquidityPayloadV2',
                'inputs': [
                    { 'name': '_id', 'type': 'uint64' },
                    { 'name': '_deployWalletGrams', 'type': 'uint128' },
                    { 'name': '_expectedLeftAmount', 'type': 'uint128' },
                    { 'name': '_expectedRightAmount', 'type': 'uint128' },
                    { 'name': '_recipient', 'type': 'address' },
                    { 'name': '_referrer', 'type': 'address' },
                    { 'name': '_successPayload', 'type': 'optional(cell)' },
                    { 'name': '_cancelPayload', 'type': 'optional(cell)' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'cell' }
                ]
            },
            {
                'name': 'buildCrossPairExchangePayload',
                'inputs': [
                    { 'name': 'id', 'type': 'uint64' },
                    { 'name': 'deploy_wallet_grams', 'type': 'uint128' },
                    { 'name': 'expected_amount', 'type': 'uint128' },
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, { 'name': 'root', 'type': 'address' }],
                        'name': 'steps',
                        'type': 'tuple[]'
                    }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'cell' }
                ]
            },
            {
                'name': 'buildCrossPairExchangePayloadV2',
                'inputs': [
                    { 'name': '_id', 'type': 'uint64' },
                    { 'name': '_deployWalletGrams', 'type': 'uint128' },
                    { 'name': '_expectedAmount', 'type': 'uint128' },
                    { 'name': '_outcoming', 'type': 'address' },
                    { 'name': '_nextStepIndices', 'type': 'uint32[]' },
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, {
                            'name': 'roots',
                            'type': 'address[]'
                        }, { 'name': 'outcoming', 'type': 'address' }, {
                            'name': 'numerator',
                            'type': 'uint128'
                        }, { 'name': 'nextStepIndices', 'type': 'uint32[]' }], 'name': '_steps', 'type': 'tuple[]'
                    },
                    { 'name': '_recipient', 'type': 'address' },
                    { 'name': '_referrer', 'type': 'address' },
                    { 'name': '_successPayload', 'type': 'optional(cell)' },
                    { 'name': '_cancelPayload', 'type': 'optional(cell)' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'cell' }
                ]
            },
            {
                'name': 'expectedDepositLiquidity',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' },
                    { 'name': 'left_amount', 'type': 'uint128' },
                    { 'name': 'right_amount', 'type': 'uint128' },
                    { 'name': 'auto_change', 'type': 'bool' }
                ],
                'outputs': [
                    {
                        'components': [{ 'name': 'step_1_left_deposit', 'type': 'uint128' }, {
                            'name': 'step_1_right_deposit',
                            'type': 'uint128'
                        }, { 'name': 'step_1_lp_reward', 'type': 'uint128' }, {
                            'name': 'step_2_left_to_right',
                            'type': 'bool'
                        }, { 'name': 'step_2_right_to_left', 'type': 'bool' }, {
                            'name': 'step_2_spent',
                            'type': 'uint128'
                        }, { 'name': 'step_2_fee', 'type': 'uint128' }, {
                            'name': 'step_2_received',
                            'type': 'uint128'
                        }, { 'name': 'step_3_left_deposit', 'type': 'uint128' }, {
                            'name': 'step_3_right_deposit',
                            'type': 'uint128'
                        }, { 'name': 'step_3_lp_reward', 'type': 'uint128' }], 'name': 'value0', 'type': 'tuple'
                    }
                ]
            },
            {
                'name': 'depositLiquidity',
                'inputs': [
                    { 'name': '_callId', 'type': 'uint64' },
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, { 'name': 'root', 'type': 'address' }],
                        'name': '_operations',
                        'type': 'tuple[]'
                    },
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, { 'name': 'root', 'type': 'address' }],
                        'name': '_expected',
                        'type': 'tuple'
                    },
                    { 'name': '_autoChange', 'type': 'bool' },
                    { 'name': '_accountOwner', 'type': 'address' },
                    { 'name': 'value5', 'type': 'uint32' },
                    { 'name': '_remainingGasTo', 'type': 'address' },
                    { 'name': '_referrer', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'expectedWithdrawLiquidity',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' },
                    { 'name': 'lp_amount', 'type': 'uint128' }
                ],
                'outputs': [
                    { 'name': 'expected_left_amount', 'type': 'uint128' },
                    { 'name': 'expected_right_amount', 'type': 'uint128' }
                ]
            },
            {
                'name': 'withdrawLiquidity',
                'inputs': [
                    { 'name': '_callId', 'type': 'uint64' },
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, { 'name': 'root', 'type': 'address' }],
                        'name': '_operation',
                        'type': 'tuple'
                    },
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, { 'name': 'root', 'type': 'address' }],
                        'name': 'value2',
                        'type': 'tuple[]'
                    },
                    { 'name': '_accountOwner', 'type': 'address' },
                    { 'name': 'value4', 'type': 'uint32' },
                    { 'name': '_remainingGasTo', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'expectedExchange',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' },
                    { 'name': 'amount', 'type': 'uint128' },
                    { 'name': 'spent_token_root', 'type': 'address' }
                ],
                'outputs': [
                    { 'name': 'expected_amount', 'type': 'uint128' },
                    { 'name': 'expected_fee', 'type': 'uint128' }
                ]
            },
            {
                'name': 'expectedSpendAmount',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' },
                    { 'name': 'receive_amount', 'type': 'uint128' },
                    { 'name': 'receive_token_root', 'type': 'address' }
                ],
                'outputs': [
                    { 'name': 'expected_amount', 'type': 'uint128' },
                    { 'name': 'expected_fee', 'type': 'uint128' }
                ]
            },
            {
                'name': 'exchange',
                'inputs': [
                    { 'name': '_callId', 'type': 'uint64' },
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, { 'name': 'root', 'type': 'address' }],
                        'name': '_operation',
                        'type': 'tuple'
                    },
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, { 'name': 'root', 'type': 'address' }],
                        'name': '_expected',
                        'type': 'tuple'
                    },
                    { 'name': '_accountOwner', 'type': 'address' },
                    { 'name': 'value4', 'type': 'uint32' },
                    { 'name': '_remainingGasTo', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'crossPoolExchange',
                'inputs': [
                    { 'name': '_id', 'type': 'uint64' },
                    { 'name': 'value1', 'type': 'uint32' },
                    { 'name': 'value2', 'type': 'uint8' },
                    { 'name': '_prevPoolTokenRoots', 'type': 'address[]' },
                    { 'name': '_op', 'type': 'uint8' },
                    { 'name': '_spentTokenRoot', 'type': 'address' },
                    { 'name': '_spentAmount', 'type': 'uint128' },
                    { 'name': '_senderAddress', 'type': 'address' },
                    { 'name': '_recipient', 'type': 'address' },
                    { 'name': '_referrer', 'type': 'address' },
                    { 'name': '_remainingGasTo', 'type': 'address' },
                    { 'name': '_deployWalletGrams', 'type': 'uint128' },
                    { 'name': '_payload', 'type': 'cell' },
                    { 'name': '_notifySuccess', 'type': 'bool' },
                    { 'name': '_successPayload', 'type': 'cell' },
                    { 'name': '_notifyCancel', 'type': 'bool' },
                    { 'name': '_cancelPayload', 'type': 'cell' }
                ],
                'outputs': []
            },
            {
                'name': 'onAcceptTokensTransfer',
                'inputs': [
                    { 'name': '_tokenRoot', 'type': 'address' },
                    { 'name': '_tokensAmount', 'type': 'uint128' },
                    { 'name': '_senderAddress', 'type': 'address' },
                    { 'name': '_senderWallet', 'type': 'address' },
                    { 'name': '_remainingGasTo', 'type': 'address' },
                    { 'name': '_payload', 'type': 'cell' }
                ],
                'outputs': []
            },
            {
                'name': 'getRoot',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    { 'name': 'dex_root', 'type': 'address' }
                ]
            },
            {
                'name': 'getTokenRoots',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    { 'name': 'left', 'type': 'address' },
                    { 'name': 'right', 'type': 'address' },
                    { 'name': 'lp', 'type': 'address' }
                ]
            },
            {
                'name': 'getTokenWallets',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    { 'name': 'left', 'type': 'address' },
                    { 'name': 'right', 'type': 'address' },
                    { 'name': 'lp', 'type': 'address' }
                ]
            },
            {
                'name': 'getVersion',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    { 'name': 'version', 'type': 'uint32' }
                ]
            },
            {
                'name': 'getVault',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'address' }
                ]
            },
            {
                'name': 'getPoolType',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'uint8' }
                ]
            },
            {
                'name': 'getFeeParams',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    {
                        'components': [{ 'name': 'denominator', 'type': 'uint128' }, {
                            'name': 'pool_numerator',
                            'type': 'uint128'
                        }, { 'name': 'beneficiary_numerator', 'type': 'uint128' }, {
                            'name': 'referrer_numerator',
                            'type': 'uint128'
                        }, { 'name': 'beneficiary', 'type': 'address' }, {
                            'name': 'threshold',
                            'type': 'map(address,uint128)'
                        }, { 'name': 'referrer_threshold', 'type': 'map(address,uint128)' }],
                        'name': 'value0',
                        'type': 'tuple'
                    }
                ]
            },
            {
                'name': 'getAccumulatedFees',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    { 'name': 'accumulatedFees', 'type': 'uint128[]' }
                ]
            },
            {
                'name': 'isActive',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'bool' }
                ]
            },
            {
                'name': 'getBalances',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    {
                        'components': [{ 'name': 'lp_supply', 'type': 'uint128' }, {
                            'name': 'left_balance',
                            'type': 'uint128'
                        }, { 'name': 'right_balance', 'type': 'uint128' }], 'name': 'value0', 'type': 'tuple'
                    }
                ]
            },
            {
                'name': 'setFeeParams',
                'inputs': [
                    {
                        'components': [{ 'name': 'denominator', 'type': 'uint128' }, {
                            'name': 'pool_numerator',
                            'type': 'uint128'
                        }, { 'name': 'beneficiary_numerator', 'type': 'uint128' }, {
                            'name': 'referrer_numerator',
                            'type': 'uint128'
                        }, { 'name': 'beneficiary', 'type': 'address' }, {
                            'name': 'threshold',
                            'type': 'map(address,uint128)'
                        }, { 'name': 'referrer_threshold', 'type': 'map(address,uint128)' }],
                        'name': '_params',
                        'type': 'tuple'
                    },
                    { 'name': '_remainingGasTo', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'withdrawBeneficiaryFee',
                'inputs': [
                    { 'name': 'send_gas_to', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'checkPair',
                'inputs': [
                    { 'name': '_accountOwner', 'type': 'address' },
                    { 'name': 'value1', 'type': 'uint32' }
                ],
                'outputs': []
            },
            {
                'name': 'upgrade',
                'inputs': [
                    { 'name': '_code', 'type': 'cell' },
                    { 'name': '_newVersion', 'type': 'uint32' },
                    { 'name': '_newType', 'type': 'uint8' },
                    { 'name': '_remainingGasTo', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'liquidityTokenRootDeployed',
                'inputs': [
                    { 'name': '_lpRootAddress', 'type': 'address' },
                    { 'name': '_remainingGasTo', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'liquidityTokenRootNotDeployed',
                'inputs': [
                    { 'name': 'value0', 'type': 'address' },
                    { 'name': '_remainingGasTo', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'onTokenWallet',
                'inputs': [
                    { 'name': '_wallet', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'setActive',
                'inputs': [
                    { 'name': '_newActive', 'type': 'bool' },
                    { 'name': '_remainingGasTo', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'setOracleOptions',
                'inputs': [
                    {
                        'components': [{ 'name': 'minInterval', 'type': 'uint8' }, {
                            'name': 'minRateDeltaNumerator',
                            'type': 'uint128'
                        }, { 'name': 'minRateDeltaDenominator', 'type': 'uint128' }, {
                            'name': 'cardinality',
                            'type': 'uint16'
                        }], 'name': '_newOptions', 'type': 'tuple'
                    },
                    { 'name': '_remainingGasTo', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'getOracleOptions',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' }
                ],
                'outputs': [
                    {
                        'components': [{ 'name': 'minInterval', 'type': 'uint8' }, {
                            'name': 'minRateDeltaNumerator',
                            'type': 'uint128'
                        }, { 'name': 'minRateDeltaDenominator', 'type': 'uint128' }, {
                            'name': 'cardinality',
                            'type': 'uint16'
                        }], 'name': 'value0', 'type': 'tuple'
                    }
                ]
            },
            {
                'name': 'removeLastNPoints',
                'inputs': [
                    { 'name': '_count', 'type': 'uint16' },
                    { 'name': '_remainingGasTo', 'type': 'address' }
                ],
                'outputs': []
            },
            {
                'name': 'getObservation',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' },
                    { 'name': '_timestamp', 'type': 'uint32' }
                ],
                'outputs': [
                    {
                        'components': [{ 'name': 'timestamp', 'type': 'uint32' }, {
                            'name': 'price0To1Cumulative',
                            'type': 'uint256'
                        }, { 'name': 'price1To0Cumulative', 'type': 'uint256' }],
                        'name': 'value0',
                        'type': 'optional(tuple)'
                    }
                ]
            },
            {
                'name': 'observation',
                'inputs': [
                    { 'name': '_timestamp', 'type': 'uint32' },
                    { 'name': '_callbackTo', 'type': 'address' },
                    { 'name': '_payload', 'type': 'cell' }
                ],
                'outputs': []
            },
            {
                'name': 'getRate',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' },
                    { 'name': '_fromTimestamp', 'type': 'uint32' },
                    { 'name': '_toTimestamp', 'type': 'uint32' }
                ],
                'outputs': [
                    {
                        'components': [{ 'name': 'price0To1', 'type': 'uint256' }, {
                            'name': 'price1To0',
                            'type': 'uint256'
                        }, { 'name': 'fromTimestamp', 'type': 'uint32' }, { 'name': 'toTimestamp', 'type': 'uint32' }],
                        'name': 'value0',
                        'type': 'optional(tuple)'
                    },
                    { 'name': 'value1', 'type': 'uint128[]' }
                ]
            },
            {
                'name': 'rate',
                'inputs': [
                    { 'name': '_fromTimestamp', 'type': 'uint32' },
                    { 'name': '_toTimestamp', 'type': 'uint32' },
                    { 'name': '_callbackTo', 'type': 'address' },
                    { 'name': '_payload', 'type': 'cell' }
                ],
                'outputs': []
            },
            {
                'name': 'getExpectedAmountByTWAP',
                'inputs': [
                    { 'name': 'answerId', 'type': 'uint32' },
                    { 'name': '_amount', 'type': 'uint128' },
                    { 'name': '_tokenRoot', 'type': 'address' },
                    { 'name': '_fromTimestamp', 'type': 'uint32' },
                    { 'name': '_toTimestamp', 'type': 'uint32' }
                ],
                'outputs': [
                    { 'name': 'value0', 'type': 'uint128' }
                ]
            },
            {
                'name': 'platform_code',
                'inputs': [],
                'outputs': [
                    { 'name': 'platform_code', 'type': 'cell' }
                ]
            }
        ],
        'data': [],
        'events': [
            {
                'name': 'OracleInitialized',
                'inputs': [
                    {
                        'components': [{ 'name': 'timestamp', 'type': 'uint32' }, {
                            'name': 'price0To1Cumulative',
                            'type': 'uint256'
                        }, { 'name': 'price1To0Cumulative', 'type': 'uint256' }], 'name': 'value0', 'type': 'tuple'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'OracleUpdated',
                'inputs': [
                    {
                        'components': [{ 'name': 'timestamp', 'type': 'uint32' }, {
                            'name': 'price0To1Cumulative',
                            'type': 'uint256'
                        }, { 'name': 'price1To0Cumulative', 'type': 'uint256' }], 'name': 'value0', 'type': 'tuple'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'OracleOptionsUpdated',
                'inputs': [
                    {
                        'components': [{ 'name': 'minInterval', 'type': 'uint8' }, {
                            'name': 'minRateDeltaNumerator',
                            'type': 'uint128'
                        }, { 'name': 'minRateDeltaDenominator', 'type': 'uint128' }, {
                            'name': 'cardinality',
                            'type': 'uint16'
                        }], 'name': 'value0', 'type': 'tuple'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'PairCodeUpgraded',
                'inputs': [
                    { 'name': 'version', 'type': 'uint32' },
                    { 'name': 'pool_type', 'type': 'uint8' }
                ],
                'outputs': []
            },
            {
                'name': 'ActiveStatusUpdated',
                'inputs': [
                    { 'name': 'current', 'type': 'bool' },
                    { 'name': 'previous', 'type': 'bool' }
                ],
                'outputs': []
            },
            {
                'name': 'FeesParamsUpdated',
                'inputs': [
                    {
                        'components': [{ 'name': 'denominator', 'type': 'uint128' }, {
                            'name': 'pool_numerator',
                            'type': 'uint128'
                        }, { 'name': 'beneficiary_numerator', 'type': 'uint128' }, {
                            'name': 'referrer_numerator',
                            'type': 'uint128'
                        }, { 'name': 'beneficiary', 'type': 'address' }, {
                            'name': 'threshold',
                            'type': 'map(address,uint128)'
                        }, { 'name': 'referrer_threshold', 'type': 'map(address,uint128)' }],
                        'name': 'params',
                        'type': 'tuple'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'DepositLiquidity',
                'inputs': [
                    { 'name': 'sender', 'type': 'address' },
                    { 'name': 'owner', 'type': 'address' },
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, { 'name': 'root', 'type': 'address' }],
                        'name': 'tokens',
                        'type': 'tuple[]'
                    },
                    { 'name': 'lp', 'type': 'uint128' }
                ],
                'outputs': []
            },
            {
                'name': 'WithdrawLiquidity',
                'inputs': [
                    { 'name': 'sender', 'type': 'address' },
                    { 'name': 'owner', 'type': 'address' },
                    { 'name': 'lp', 'type': 'uint128' },
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, { 'name': 'root', 'type': 'address' }],
                        'name': 'tokens',
                        'type': 'tuple[]'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'Exchange',
                'inputs': [
                    { 'name': 'sender', 'type': 'address' },
                    { 'name': 'recipient', 'type': 'address' },
                    { 'name': 'spentTokenRoot', 'type': 'address' },
                    { 'name': 'spentAmount', 'type': 'uint128' },
                    { 'name': 'receiveTokenRoot', 'type': 'address' },
                    { 'name': 'receiveAmount', 'type': 'uint128' },
                    {
                        'components': [{ 'name': 'feeTokenRoot', 'type': 'address' }, {
                            'name': 'pool_fee',
                            'type': 'uint128'
                        }, { 'name': 'beneficiary_fee', 'type': 'uint128' }, {
                            'name': 'beneficiary',
                            'type': 'address'
                        }],
                        'name': 'fees',
                        'type': 'tuple[]'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'ReferrerFees',
                'inputs': [
                    {
                        'components': [{ 'name': 'amount', 'type': 'uint128' }, { 'name': 'root', 'type': 'address' }],
                        'name': 'fees',
                        'type': 'tuple[]'
                    }
                ],
                'outputs': []
            },
            {
                'name': 'Sync',
                'inputs': [
                    { 'name': 'reserves', 'type': 'uint128[]' },
                    { 'name': 'lp_supply', 'type': 'uint128' }
                ],
                'outputs': []
            }
        ],
        'fields': [
            { 'name': '_pubkey', 'type': 'uint256' },
            { 'name': '_timestamp', 'type': 'uint64' },
            { 'name': '_constructorFlag', 'type': 'bool' },
            { 'name': 'platform_code', 'type': 'cell' },
            {
                'components': [{ 'name': 'price0To1Cumulative', 'type': 'uint256' }, {
                    'name': 'price1To0Cumulative',
                    'type': 'uint256'
                }], 'name': '_points', 'type': 'map(uint32,tuple)'
            },
            { 'name': '_length', 'type': 'uint16' },
            {
                'components': [{ 'name': 'minInterval', 'type': 'uint8' }, {
                    'name': 'minRateDeltaNumerator',
                    'type': 'uint128'
                }, { 'name': 'minRateDeltaDenominator', 'type': 'uint128' }, {
                    'name': 'cardinality',
                    'type': 'uint16'
                }],
                'name': '_options',
                'type': 'tuple'
            },
            { 'name': '_root', 'type': 'address' },
            { 'name': '_vault', 'type': 'address' },
            { 'name': '_active', 'type': 'bool' },
            { 'name': '_currentVersion', 'type': 'uint32' },
            {
                'components': [{ 'name': 'denominator', 'type': 'uint128' }, {
                    'name': 'pool_numerator',
                    'type': 'uint128'
                }, { 'name': 'beneficiary_numerator', 'type': 'uint128' }, {
                    'name': 'referrer_numerator',
                    'type': 'uint128'
                }, { 'name': 'beneficiary', 'type': 'address' }, {
                    'name': 'threshold',
                    'type': 'map(address,uint128)'
                }, { 'name': 'referrer_threshold', 'type': 'map(address,uint128)' }], 'name': '_fee', 'type': 'tuple'
            },
            { 'name': '_typeToRootAddresses', 'type': 'map(uint8,address[])' },
            { 'name': '_typeToWalletAddresses', 'type': 'map(uint8,address[])' },
            { 'name': '_typeToReserves', 'type': 'map(uint8,uint128[])' }
        ]
    },
    tvc: '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'
}