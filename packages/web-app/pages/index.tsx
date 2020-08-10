import {fooData} from '@package/foo'
import Bar from '@package/bar'

export default function Home() {
  return (
    <div>
      Imported modules from another workspace:
      <pre>{fooData.message}</pre>
      <Bar />
    </div>
  )
}
