
<script>
export default {
  name: 'index',
  mounted () {
    const { clientWidth, children: [{ clientWidth: childrenClientWidth, offsetLeft }] } = this.$refs.container
    this.translateWidth = childrenClientWidth + (offsetLeft * 2)
    this.containerWidth = clientWidth
  },
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      translateStatus: 0,
      translateWidth: 0,
      containerWidth: 0
    }
  },
  methods: {
    next () {
      this.translateStatus = this.translateStatus + this.translateWidth
    },
    prev () {
      this.translateStatus = this.translateStatus - this.translateWidth
    }
  },
  render (h) {
    return (
      <div class="slider-wrapper">
        {this.translateWidth}
        <div class="slider-container" ref="container" style={{ transform: `translateX(-${this.translateStatus}px)` }}>
          {this.items
            .reduce((acc, item, index) => {
              if (index === 0 || index % 3 === 0) acc.push([])
              acc[acc.length - 1].push(
                <div class="slider">
                  {item}
                </div>
              )
              return acc
            }, [])
            .map(item => <div class="group-item">{item}</div>)
          }
        </div>
        <button onClick={this.next} class="next-button">next</button>
        <button onClick={this.prev} class="prev-button">prev</button>
      </div>
    )
  }
}
</script>

<style scoped>
  .slider-wrapper {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  .slider-container {
    display: inline-flex;
    transition: transform 250ms ease-in-out;
  }
  .slider {
    width: 150px;
    height: 150px;
    background-color: #000000;
    color: #fff;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
  }
  .next-button {
    position: absolute;
    right: 15px;
    top: calc(50% - 10px);
  }
  .prev-button {
    position: absolute;
    left: 15px;
    top: calc(50% - 10px);
  }
  .group-item {
    display: inline-flex;
  }
</style>
