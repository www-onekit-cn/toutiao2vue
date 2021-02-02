/* eslint-disable prefer-rest-params */
export default class CanvasContext {
  constructor(webCanvasContext) {
    this.webCanvasContext = webCanvasContext
  }

  arc(...params) {
    return this.webCanvasContext.arc.apply(this, params)
  }

  arcTo(...params) {
    return this.webCanvasContext.arcTo.apply(this, params)
  }

  beginPath(...params) {
    return this.webCanvasContext.beginPath.apply(this, params)
  }

  bezierCurveTo(...params) {
    return this.webCanvasContext.bezierCurveTo.apply(this, params)
  }

  clearRect(...params) {
    return this.webCanvasContext.clearRect.apply(this, params)
  }

  createCircularGradient(...params) {
    return this.webCanvasContext.createCircularGradient.apply(this, params)
  }

  createLinearGradient(...params) {
    return this.webCanvasContext.createLinearGradient.apply(this, params)
  }

  createPattern(...params) {
    return this.webCanvasContext.createPattern.apply(this, params)
  }

  draw() {
    return this.webCanvasContext.draw()
  }

  drawImage(...params) {
    return this.webCanvasContext.drawImage.apply(this, params)
  }

  fill(...params) {
    return this.webCanvasContext.fill.apply(this, params)
  }

  fillRect(...params) {
    this.webCanvasContext.fillRect.apply(this, params)
  }

  fillText(...params) {
    return this.webCanvasContext.fillText.apply(this, params)
  }

  lineTo(...params) {
    return this.webCanvasContext.lineTo.apply(this, params)
  }

  measureText(...params) {
    return this.webCanvasContext.measureText.apply(this, params)
  }

  moveTo(...params) {
    return this.webCanvasContext.moveTo.apply(this, params)
  }

  quadraticCurveTo(...params) {
    return this.webCanvasContext.quadraticCurveTo.apply(this, params)
  }

  rect(...params) {
    return this.webCanvasContext.rect.apply(this, params)
  }

  restore(...params) {
    return this.webCanvasContext.restore.apply(this, params)
  }

  rotate(...params) {
    return this.webCanvasContext.rotate.apply(this, params)
  }

  save(...params) {
    return this.webCanvasContext.save.apply(this, params)
  }

  scale(...params) {
    return this.webCanvasContext.scale.apply(this, params)
  }

  //
  set fillStyle(fillStyle) {
     this.webCanvasContext.setFillStyle(fillStyle)
  }

  get fillStyle() {
    return this.webCanvasContext.getFillStyle()
  }

  setFillStyle(fillStyle) {
    this.fillStyle = fillStyle
  }

  //
  set font(font) {
     this.webCanvasContext.setFontSize(font)
  }

  get font() {
    return this.webCanvasContext.getFontSize()
  }

  setFontSize(font) {
    this.font = font
  }

  //
  set globalAlpha(globalAlpha) {
     this.webCanvasContext.setGlobalAlpha(globalAlpha)
  }

  get globalAlpha() {
    return this.webCanvasContext.getGlobalAlpha()
  }

  setGlobalAlpha(globalAlpha) {
    this.globalAlpha = globalAlpha
  }

  //
  set lineCap(lineCap) {
     this.webCanvasContext.setLineCap(lineCap)
  }

  get lineCap() {
    return this.webCanvasContext.getLineCap()
  }

  setLineCap(lineCap) {
    this.lineCap = lineCap
  }

  //
  set lineDashOffset(lineDashOffset) {
     this.webCanvasContext.setLineDash(lineDashOffset)
  }

  get lineDashOffset() {
    return this.webCanvasContext.getLineDash()
  }

  setLineDash(lineDashOffset) {
    this.lineDashOffset = lineDashOffset
  }

  //
  set lineJoin(lineJoin) {
     this.webCanvasContext.setLineJoin(lineJoin)
  }

  get lineJoin() {
    return this.webCanvasContext.getLineJoin()
  }

  setLineJoin(lineJoin) {
    this.lineJoin = lineJoin
  }

  //
  set lineWidth(lineWidth) {
     this.webCanvasContext.setLineWidth(lineWidth)
  }

  get lineWidth() {
    return this.webCanvasContext.getLineWidth()
  }

  setLineWidth(lineWidth) {
    this.lineWidth = lineWidth
  }

  //
  set miterLimit(miterLimit) {
     this.webCanvasContext.setMiterLimit(miterLimit)
  }

  get miterLimit() {
    return this.webCanvasContext.getMiterLimit()
  }

  setMiterLimit(miterLimit) {
    this.miterLimit = miterLimit
  }

  //
  set shadowOffsetX(shadowOffsetX) {
     this.webCanvasContext.setShadow(shadowOffsetX, 0, 0, 'black')
  }

  set shadowOffsetY(shadowOffsetY) {
     this.webCanvasContext.setShadow(0, shadowOffsetY, 0, 'black')
  }

  // eslint-disable-next-line class-methods-use-this
  set shadowColor(shadowColor) {
    // return this.webCanvasContext.shadowColor.apply(this, params)
  }

  // eslint-disable-next-line class-methods-use-this
  set shadowBlur(shadowBlur) {
    // return this.webCanvasContext.shadowBlur.apply(this, params)
  }


  //
  strokeStyle(...params) {
    return this.webCanvasContext.strokeStyle.apply(this, params)
  }

  setStrokeStyle(...params) {
    return this.webCanvasContext.setStrokeStyle.apply(this, params)
  }

  setTextAlign(...params) {
    return this.webCanvasContext.setTextAlign.apply(this, params)
  }

  setTextBaseline(...params) {
    return this.webCanvasContext.setTextBaseline.apply(this, params)
  }

  setTransform(...params) {
    return this.webCanvasContext.setTransform.apply(this, params)
  }

  stroke(...params) {
    return this.webCanvasContext.stroke.apply(this, params)
  }

  strokeRect(...params) {
    return this.webCanvasContext.strokeRect.apply(this, params)
  }

  strokeText(...params) {
    return this.webCanvasContext.strokeText.apply(this, params)
  }

  transform(...params) {
    return this.webCanvasContext.transform.apply(this, params)
  }

  translate(...params) {
    return this.webCanvasContext.translate.apply(this, params)
  }
}
