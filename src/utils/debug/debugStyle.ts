import { isDebug } from '.'
import GUIController from '../gui'

const DEFAULT_BACK_COLOR = '#140d1a'

export const debugStyle = (style: CSSStyleDeclaration) => {
  if (!isDebug()) return null

  style.backgroundColor = DEFAULT_BACK_COLOR
  GUIController.instance.addColor(style, 'backgroundColor', undefined, 'background', 'Style')
}
