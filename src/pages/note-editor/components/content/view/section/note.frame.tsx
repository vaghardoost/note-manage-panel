import { generate } from "randomstring"
import { Frame } from "../../../../../../model/note"

import NoteRich from "./note.rich"

export default ({ frame }: Props) => {
  return <>
    <div className="card around">
      {
        (frame.richtext.length === 0)
          ? <p style={{ opacity: '0.3' }}>پاراگراف خالی</p>
          : frame.richtext.map((rich) => <NoteRich richtext={rich} />)
      }
    </div>
  </>
}


interface Props {
  frame: Frame
}