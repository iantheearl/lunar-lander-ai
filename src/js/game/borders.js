class Borders {
  constructor(engine) {
    this.engine = engine

    this.initBodies()
  }

  initBodies = () => {
    const commonOptions = {
      label: BORDERS_LABEL,
      isStatic: true,
      slop: 0,
      render: {
        fillStyle: BORDER_COLOR
      }
    }

    const top = Bodies.rectangle(
      CANVAS_WIDTH / 2,
      -BORDER_THICKNESS / 2,
      CANVAS_WIDTH - BORDER_THICKNESS / 2,
      BORDER_THICKNESS,
      commonOptions
    )

    const bottom = Bodies.rectangle(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT + BORDER_THICKNESS / 2,
      CANVAS_WIDTH - BORDER_THICKNESS / 2,
      BORDER_THICKNESS,
      commonOptions
    )

    const left = Bodies.rectangle(
      -BORDER_THICKNESS / 2,
      CANVAS_HEIGHT / 2,
      BORDER_THICKNESS,
      CANVAS_HEIGHT - BORDER_THICKNESS / 2,
      commonOptions
    )

    const right = Bodies.rectangle(
      CANVAS_WIDTH + BORDER_THICKNESS / 2,
      CANVAS_HEIGHT / 2,
      BORDER_THICKNESS,
      CANVAS_HEIGHT - BORDER_THICKNESS / 2,
      commonOptions
    )

    World.add(this.engine.world, [top, bottom, left, right])
  }
}
