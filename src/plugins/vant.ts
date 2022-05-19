import { Button, Field, Image, Tabbar, TabbarItem, Cell, CellGroup, List } from 'vant'
import { App } from 'vue'

export default {
  install(app: App) {
    app.component(Button.name, Button)
    app.component(Field.name, Field)
    app.component(Image.name, Image)
    app.component(Tabbar.name, Tabbar)
    app.component(TabbarItem.name, TabbarItem)
    app.component(Cell.name, Cell)
    app.component(CellGroup.name, CellGroup)
    app.component(List.name, List)
  }
}

