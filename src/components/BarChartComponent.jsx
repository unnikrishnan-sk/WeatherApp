import React from 'react'
import { BarChart } from 'react-native-gifted-charts'

const BarChartComponent = ({data, hideyAxisText,spacing, hideRules, showVerticalLines, verticalLinesStrokeDashArray, verticalLinesSpacing, verticalLinesColor, verticalLinesHeight, yAxisThickness, showYAxisIndices, xAxisThickness, barBorderColor, barWidth, noOfSections, dashWidth, dashGap, isAnimated, initialSpacing, width }) => {
  return (
    <BarChart data={data}
    hideYAxisText={hideyAxisText}
    spacing={spacing}
    hideRules={hideRules}
    showVerticalLines={showVerticalLines}
    verticalLinesStrokeDashArray={verticalLinesStrokeDashArray}
    verticalLinesSpacing={verticalLinesSpacing}
    verticalLinesColor={verticalLinesColor}
    verticalLinesHeight={verticalLinesHeight}
    yAxisThickness={yAxisThickness}
    showYAxisIndices={showYAxisIndices}
    xAxisThickness={xAxisThickness}
    barBorderColor={barBorderColor}
    barWidth={barWidth}
    noOfSections={noOfSections}         
    dashWidth={dashWidth}             
    dashGap={dashGap}     
    isAnimated={isAnimated} 
    width={width}
    initialSpacing={initialSpacing}
    />
  )
}

export default BarChartComponent