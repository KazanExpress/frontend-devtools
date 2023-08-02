
# Frontend Devtools

## Использование

1. Установить пакет

```
npm i -D @kazanexpress/frontend-devtools@github:KazanExpress/frontend-devtools
```
2. Подключить компонент и стили
```
import '@kazanexpress/frontend-devtools/dist/KeDevtools.css';
import KeDevtools from '@kazanexpress/frontend-devtools';
```
3. Использовать
```html
<KeDevtools
  :items="devtoolsItems"
  local-storage-key="ke-devtools-example"
  @init="onInit"
  @change="onChange"
>
  <template #item-example-save="{ active }">
    <span class="example" :class="{  active: active }">
      save local
    </span>
  </template>
</KeDevtools>
```
Полный пример использования в [./src/App.vue](https://github.com/KazanExpress/frontend-devtools/blob/master/src/App.vue)

### Props
| | types | required | default |
|--|--|--|--|
| items | [TDevtoolsItem](#types)[] | **true** | |
| localStorageKey | string | false | 'ke-devtools' |

### Events
| name | payload | description |
|--|--|--|
|change|[TChangePayload](#types)|Вызывается при каждом клике на элемент панели|
|init|string[]|Вызывается при mounted компонента, передавая все активные флаги|

### Slots

| name | description |
|--|--|
| before | Слот для вставки контента, до панели |
| after | Слот для вставки контента, после панели |
| activator | Слот для активатора панели, по дефолту есть иконка |
| item-{key} | Динамичный слот, формируется из переданного списка элементов. Скоуп: `active` – состояние активности флага |

### Types
```ts
export type TDevtoolsItem<T = string> = {
  key: T;
  saveLocal?: boolean; // default true
  defaultActive?: boolean; // default false
};

export type TChangePayload<T = string> = {
  key: T;
  value: boolean;
};
```
  
  
## Разработка  

### Для разработки

```
yarn install
yarn serve
```

#### Для публикации

```
yarn build-bundle
```
После надо закоммитить изменения и создать новый релиз в гитхабе
