// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
//引入样式
import './style/index.css'
export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!(import.meta as any).env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        primaryColor: 'skyblue',
        models: [
          {
            path: 'https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json',
            position: [0, 90],
          
          },
          {
            path: 'https://model.oml2d.com/HK416-1-normal/model.json',
            position: [0, 70],
            scale: 0.07,
            stageStyle: {
              height: 400,
            }
          },
          {
            path: 'https://model.oml2d.com/Senko_Normals/senko.model3.json',
            position: [20, 50],
          },
          {
            path: 'https://model.oml2d.com/bilibili-22/index.json',
            scale:0.25,
            position: [0, 50],
        
          },
          {
            name: 'azi',
            path: 'https://model.oml2d.com/uni/model.json',
            scale:0.1,
            position: [-30, 90],
          }
        ],
        tips: {
          idleTips: {
            wordTheDay: (data) => {
              return data.hitokoto;
            }
          }
        },
        dockedPosition: 'right',
        menus: {
          items: (defaultItems) => {
             return [
               defaultItems[0],
               defaultItems[1],
              {
                id: 'github',
                title: '我的github',
                icon: 'icon-like',
                onClick: () => window.open('https://github.com/Misyan-03')
              }
            ]
          }
        }

      });
    }
  }
};
