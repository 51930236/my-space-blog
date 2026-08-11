---
title: Redefine 主题 Markdown 语法速查
date: 2026-08-11 16:00:00
updated: 2026-08-11 17:00:00
categories: 技术分享
tags:
  - Hexo
  - Markdown
  - Redefine主题
  - 语法指南
thumbnail: 'https://evan.beee.top/img/208184324-f2640ade-587a-4f46-8ad1-7b4c1b31394f.png'
excerpt: '一份专为 hexo-theme-redefine 准备的 Markdown 语法速查表，涵盖从基础排版到主题特色的所有用法。'
comment: false
---

欢迎使用 **hexo-theme-redefine**！这是一份专为 Redefine 主题整理的 Markdown 语法速查指南，帮助你快速上手文章写作。

## 📝 文章头部 (Front-matter)

每篇文章顶部的 `---` 区域用于设置文章元数据。

```yaml
---
title: 文章标题 # ✅ 必填，会显示在页面标题和文章中
date: 2026-08-11 16:00:00 # ✅ 必填，文章创建时间
updated: 2026-08-11 17:00:00 # 可选，文章更新时间
categories: 技术分享 # 可选，文章分类（建议单级）
tags: # 可选，文章标签（支持多个）
  - Hexo
  - Markdown
thumbnail: '/images/thumb.jpg' # 可选，文章缩略图（显示在首页列表）
excerpt: '文章摘要' # 可选，首页显示的文章摘要
comments: true # 可选，是否开启评论，默认为 true
published: true # 可选，是否发布，默认为 true
sticky: 10 # 可选，置顶优先级，数字越大越靠前
password: 123456 # 可选，文章访问密码
---
```

## 📌 分类与标签

Redefine 主题会为文章的 `categories` 和 `tags` 自动生成独立的聚合页面。

```yaml
# 单级分类（最常用）
categories: 技术分享

# 多级分类（生成层级路径）
categories:
  - 技术分享
  - 前端开发

# 多个标签
tags:
  - Hexo
  - Redefine
  - 博客搭建
```

**访问路径：**

- 分类总览：`/categories/`
- 具体分类：`/categories/技术分享/`
- 标签总览：`/tags/`

## 🏷️ 标题

```markdown
# 一级标题 (H1)

## 二级标题 (H2)

### 三级标题 (H3)

#### 四级标题 (H4)

##### 五级标题 (H5)

###### 六级标题 (H6)
```

建议一篇文章只使用一个 `# 一级标题`，即文章标题，正文中的章节标题从 `##` 开始。

## 📦 代码块

Redefine 主题自带代码高亮和复制按钮。

**用法 1：指定语言**

````markdown
```javascript
console.log('Hello, Redefine!');
```
````

**用法 2：不指定语言**

````markdown
```
这是一个无语言标注的代码块。
```
````

**效果：**

```javascript
console.log('Hello, Redefine!');
```

## 📷 图片

图片支持本地和网络两种方式。Redefine 主题默认开启图片懒加载 (`lazyload: true`)。

**本地图片：** 将图片放在 `source/images/` 目录下，使用绝对路径引用。

```markdown
![图片描述](/images/photo.jpg)
```

**网络图片：**

```markdown
![图片描述](https://example.com/photo.jpg)
```

**带样式的 HTML 方式 (更灵活)：**

```html
<img src="/images/photo.jpg" alt="描述" style="max-width: 100%; border-radius: 8px;" />
```

## 🔗 链接

```markdown
[链接文字](https://example.com)
```

**示例：**

- [Redefine 主题文档](https://redefine-docs.ohevan.com/)
- [Hexo 官方文档](https://hexo.io/zh-cn/docs/)

## 📋 列表

**无序列表：**

```markdown
- 项目一
- 项目二
  - 子项目 2.1
  - 子项目 2.2
- 项目三
```

**有序列表：**

```markdown
1. 第一步
2. 第二步
3. 第三步
```

## 💬 引用

```markdown
> 这是一段引用文字。
> 可以跨多行。
```

**效果：**

> 这是一段引用文字。
> 可以跨多行。

## 🎨 Redefine 主题特色：提示框 (Note)

Redefine 主题支持多种风格的提示框。

```markdown
::: note
这是一个普通的提示框。
:::

::: note 自定义标题
这是一个带自定义标题的提示框。
:::

::: note red
这是一个红色的提示框。
:::

::: note blue
这是一个蓝色的提示框。
:::

::: note green
这是一个绿色的提示框。
:::
```

**支持的提示框类型：**

- `red`：红色（重要、危险）
- `blue`：蓝色（信息、提示）
- `green`：绿色（成功、完成）
- `orange`：橙色（警告、注意）
- `purple`：紫色（扩展、补充）

## 🔲 任务列表

```markdown
- [x] 已完成的任务
- [ ] 待办任务 1
- [ ] 待办任务 2
```

**效果：**

- [x] 已完成的任务
- [ ] 待办任务 1
- [ ] 待办任务 2

## 📊 表格

```markdown
| 功能   | 语法       | 说明       |
| ------ | ---------- | ---------- |
| 加粗   | `**文字**` | 使文字变粗 |
| 斜体   | `*文字*`   | 使文字倾斜 |
| 删除线 | `~~文字~~` | 添加删除线 |
```

**效果：**

| 功能   | 语法       | 说明       |
| ------ | ---------- | ---------- |
| 加粗   | `**文字**` | 使文字变粗 |
| 斜体   | `*文字*`   | 使文字倾斜 |
| 删除线 | `~~文字~~` | 添加删除线 |

## 🖼️ 分隔线

```markdown
---
```

**效果：**

---

## 📝 文本格式

```markdown
**加粗文字**
_斜体文字_
~~删除线文字~~
`行内代码`
```

**效果：**

- **加粗文字**
- _斜体文字_
- ~~删除线文字~~
- `行内代码`

## 🚀 说说功能

在 `source/_data/essays.yml` 中管理短内容。

```yaml
- content: |
    这是一条说说内容，支持 **Markdown** 语法。
    <img src="/images/photo.jpg" alt="图片" style="max-width: 100%;" />
  date: 2026-08-11 16:00:00
```

## 📖 书签功能

在 `source/_data/bookmarks.yml` 中管理书签收藏。

```yaml
- title: Redefine 主题文档
  url: https://redefine-docs.ohevan.com/
  description: 主题官方文档
  image: https://redefine.ohevan.com/favicon.ico
```

## ⚙️ 配置建议：保持格式统一

为了让你的文章格式更加统一，建议在写作时遵循以下规范：

1. **中英文之间有空格**：比如 `在 Hexo 中使用 Redefine 主题`，而不是 `在Hexo中使用Redefine主题`。
2. **标题层级清晰**：从 `##` 开始，避免跳级使用。
3. **图片添加 alt 属性**：方便 SEO 和无障碍访问，如 `![Hexo 配置界面](/images/hexo-config.png)`。
4. **代码块指定语言**：便于高亮显示。

## 📚 延伸阅读

- [Markdown 官方教程](https://markdown.com.cn/)
- [Redefine 主题文档](https://redefine-docs.ohevan.com/)
- [Font Awesome 图标库](https://fontawesome.com/icons)
