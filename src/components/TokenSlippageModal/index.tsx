import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, Text } from '@snowge/uikit'
import { CheckCircle } from 'react-feather'
import Modal from '../Modal'
import { AutoRow, RowBetween } from '../Row'
import { AutoColumn } from '../Column'

const slippageMessages = new Map();
/* 
* TODO: Get finalized versions of all of these
*/
slippageMessages.set('SNOWGE', 'Snowge uses a randomized transaction fee of 2%, 4%, 6% or 8%. SnowgeMcFloofy recommends setting your slippage tolerance to 9%!');

slippageMessages.set('NCAT', 'NCAT slippage NEEDS to be at atleast 9–11% because 5% of each transaction is taxed to get locked into liquidity and 4% is distributed amongst holders.');

slippageMessages.set('CATNIP', 'Those evil bots have just met their match. Our 8.0% tax on every transaction will ensure they will be the only ones getting “front-run” in the system. Set your slippage to 9% to 12% luv.');

slippageMessages.set('ACHTOOLS', 'Achtools has an 8% fee: 4% burn and 4% redistribution to holders. We recommend setting your slippage to 10%-11%.');

slippageMessages.set('WBN', 'WeatherBalloon is a verifiably Fair Launch Reflectionary token, allowing frictionless staking through the simple act of owning the token.');

slippageMessages.set('LAIKA', 'Laika has an automatically scaling tax between 0.5% and 20% based on how much the amount being sold is relative to the total circulating supply. Set your slippage accordingly!');

slippageMessages.set('bShiba', 'Thanks to bShibas awesome redistribution mechanic, you will have to adjust your slippage tolerance to at least 11%!');

slippageMessages.set('FETA', 'Use 11% slippage and wait to collect cheese!');

const WarningContainer = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 1rem;
  background: rgba(242, 150, 2, 0.05);
  border: 1px solid #FFFFFF;
  border-radius: 20px;
  overflow: auto;
`

const StyledCheckIcon = styled(CheckCircle)`
  stroke: ${({ theme }) => theme.colors.contrast};
`

export default function TokenSlippageModal({ tokenName, isOpen, onConfirm }: { tokenName: string | null; isOpen: boolean; onConfirm: () => void }) {

  const slippageMessage = slippageMessages.get(tokenName)

  const handleDismiss = useCallback(() => null, [])
  return (
    <Modal isOpen={isOpen} onDismiss={handleDismiss} maxHeight={90}>
      <WarningContainer className="token-warning-container">
        <AutoColumn gap="lg">
          <AutoRow gap="6px">
            <StyledCheckIcon />
            <Text>Notice for trading {tokenName}</Text>
          </AutoRow>
          <>
            <Text>
              {slippageMessage}
            </Text>
          </>
          <RowBetween>
            <Button
              id="confirm-snowgeWarning"
              variant="danger"
              style={{ width: '140px' }}
              onClick={() => {
                onConfirm()
              }}
            >
              Continue
            </Button>
          </RowBetween>
        </AutoColumn>
      </WarningContainer>
    </Modal>
  )
}