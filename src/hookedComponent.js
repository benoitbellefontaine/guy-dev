//Hooks.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { curveBasis } from '@vx/curve'
import { AreaClosed, LinePath, Line } from '@vx/shape'
import { ParentSize } from '@vx/responsive'
import { scaleTime, scaleLinear } from '@vx/scale'
import { GradientPinkRed } from '@vx/gradient'
import { genDateValue } from '@vx/mock-data'
import { extent, max } from 'd3-array'
import { Spring } from 'react-spring/renderprops'

const data = genDateValue(20)
const x = d => d.date
const y = d => d.value

const Graph = ({ interpolate, data, xScale, yScale }) => (
    <AreaClosed
      data={data.map((d, i) => ({ ...d, value: interpolate[i] }))}
      xScale={xScale}
      yScale={yScale}
      x={x}
      y={y}
      strokeWidth={2}
      stroke={'url(#PinkRed)'}
      fill={'url(#PinkRed)'}
      curve={curveBasis}
    />
  )

const HookedComponent = ({ interpolate, data, xScale, yScale }) => {
    const props = useSpring({
        opacity: 1,
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        from: { opacity: 0, width: '0%' },
        delay: '10000'
    })
    return (
        <ParentSize>
            {({ width, height }) => {
                console.log('width',width)
                console.log('height',height)
                const xScale = scaleTime({ range: [0, width], domain: extent(data, x) })
                const yMax = max(data, y)
                const yScale = scaleLinear({ range: [height / 2, 0], domain: [0, yMax], nice: true })
                const interpolate = data.map(d => Math.random() * yMax)
                const extra = { data, xScale, yScale }
                return (
                    <div style={{ width: '100%', height: '100%', cursor: 'pointer' }} onClick={this.toggle}>
                    <svg style={{ position: 'absolute', bottom: 0 }} width={width} height={height / 2}>
                        <GradientPinkRed id="PinkRed" />
                        <g>
                        <Spring to={{ interpolate }} {...extra} children={Graph} />
                        </g>
                    </svg>
                    </div>
                )
            }}
        </ParentSize>
    )
    
}

export default HookedComponent;