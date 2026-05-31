import { useContext } from 'react';
import { Pie, PieChart } from 'recharts';
import { TimelineContext } from '../../../TimelineContext';



// #endregion
export default function InteractionChart({ isAnimationActive = true }) {

  const { timelineData, setTimelineData } = useContext(TimelineContext)
  let textCount = 0
  let videoCount = 0
  let callCount = 0

  timelineData.map(data => {
    if (data.type === 'text') {
      textCount++
    } else if (data.type === 'video') {
      videoCount++
    } else if (data.type === 'call') {
      callCount++
    }
  })

  const data = [
    { name: 'Text', value: textCount, fill: '#7f37f5' },
    { name: 'Video', value: videoCount, fill: '#37a163' },
    { name: 'Call', value: callCount, fill: '#244d3f' },
  ];

  return (
    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="70%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="5%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
    </PieChart>
  );
}