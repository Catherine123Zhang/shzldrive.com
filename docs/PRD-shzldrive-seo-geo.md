# PRD — shzldrive.com SEO/GEO + 多语言

## 1. 定位差异（vs nbshzl-motor.com）

| | nbshzl-motor.com | shzldrive.com |
|---|---|---|
| 定位 | 通用 BLDC 电机制造商 | 重型移动设备**驱动系统**方案商 |
| 卖什么 | 单个产品（电机、减速器、控制器） | 整套方案（motor + gearbox + controller + brake） |
| 目标客户 | 泛工业采购（输送、水泵、割草、包装） | 设备 OEM（machinery mover、AGV、transfer cart 制造商） |
| 买家角色 | 采购经理/工程师找零部件 | 设备设计师/CTO 找完整驱动总成 |
| SEO 策略 | 产品型号词、通用 BLDC 词 | 应用场景词 + drive system 方案词 |

**结论：两站不互相蚕食，shzldrive.com 走"解决方案"路线，关键词与 nbshzl 基本无重叠。**

## 2. 目标关键词（种子词 → 后续 SEMrush 扩展）

### 核心词（高意向）
| 关键词 | 预估搜索量 | 竞争 | 对应页面 |
|--------|-----------|------|---------|
| machinery mover motor | 低 | 低 | /heavy-duty-drives/ |
| AGV drive motor | 中 | 中 | /heavy-duty-drives/ |
| AGV drive system | 中 | 中 | /heavy-duty-drives/ |
| AGV wheel drive BLDC | 低 | 低 | /products/l-type-geared-motors/ |
| transfer cart motor | 低 | 低 | /heavy-duty-drives/ |
| electric transfer trolley motor | 低 | 低 | /heavy-duty-drives/ |
| PV cleaning robot motor | 低 | 低 | /pv-cleaning-robot-drive/ |
| solar panel cleaning robot drive | 低 | 低 | /pv-cleaning-robot-drive/ |
| BLDC gear motor 48V | 中 | 中 | /products/ |
| high torque BLDC motor China | 中 | 中 | 首页 |
| prototype drive kit motor | 低 | 低 | /prototype-drive-kit/ |

### 长尾词（博客覆盖）
- how to select motor for AGV
- BLDC vs AC motor for AGV
- machinery mover drive system design
- heavy duty AGV motor specifications
- electric transfer cart motor sizing
- 48V BLDC motor with gearbox for heavy load
- PV cleaning robot drive system requirements

### 竞品（SEO 对标）
- ketterer-drives.com — 德国，AGV/AMR 方案
- hagvwheel.com — 青岛，AGV 电动转向驱动轮
- zhlun.com — 广州，AGV 移动机器人
- movematic.in — 印度，AGV 轮驱动
- tzbotautomation.com — 中国，AGV 驱动轮

## 3. 多语言策略

### 8 语言（标准配置）
| 路径 | 语言 | 目标市场 | 优先级 |
|------|------|---------|--------|
| `/` | 英语 | 全球 | P0 |
| `/es/` | 西班牙语 | 拉美（墨西哥/巴西工业区） | P1 |
| `/pt/` | 葡萄牙语 | 巴西（南美最大工业国） | P1 |
| `/fr/` | 法语 | 非洲法语区+法国 | P2 |
| `/ar/` | 阿拉伯语 | 中东（UAE/沙特工业采购） | P2 |
| `/ru/` | 俄语 | 俄罗斯+CIS（重工业大国） | P1 |
| `/vi/` | 越南语 | 越南（制造业进口大国） | P2 |
| `/id/` | 印尼语 | 印尼（东南亚最大工业国） | P2 |

### 翻译范围
每个语言完整翻译的页面：
1. 首页 `/`
2. 产品总览 `/products/`
3. 7 个产品详情页 `/products/[slug]/`
4. Heavy-Duty Drives `/heavy-duty-drives/`
5. PV Cleaning Robot `/pv-cleaning-robot-drive/`
6. Drive Selection `/drive-selection/`
7. Prototype Kit `/prototype-drive-kit/`
8. Replacement Motor `/replacement-motor/`
9. About `/about/`
10. Blog `/blog/`
11. Contact `/contact/`

**总计：11 模板 × 8 语言 = 88 页 + 7 产品 × 7 语言 = 49 页 = ~137 页**

## 4. SEO/GEO 基础设施清单

### 已完成 ✅
- [x] canonical URL → shzldrive.com
- [x] @astrojs/sitemap 集成
- [x] robots.txt（AI 爬虫全部放行）
- [x] Organization Schema
- [x] OG + Twitter meta
- [x] hreflang 框架
- [x] i18n 翻译系统骨架
- [x] GSC 验证 + sitemap 提交

### 待做
- [ ] GA4 创建 + 接入（需要 Measurement ID）
- [ ] OG 默认图片（1200x630 品牌+产品图）
- [ ] Product Schema — 每个产品页
- [ ] FAQPage Schema — 每个产品页 FAQ 区
- [ ] BreadcrumbList Schema — 全站
- [ ] 多语言页面生成（137 页）
- [ ] hreflang 完善（每页对应 8 语言互指）
- [ ] 阿拉伯语 RTL CSS 适配
- [ ] 博客内容（3-5 篇，覆盖长尾词）
- [ ] 内链策略（产品互链、方案→产品互链）

## 5. 执行计划

| Phase | 内容 | 预估时间 |
|-------|------|---------|
| Phase 1 | SEO 基础设施 | ✅ 已完成 |
| Phase 2 | 多语言页面生成（模板化 + AI 翻译） | 1 个对话 |
| Phase 3 | Schema 增强（Product/FAQ/Breadcrumb） | 30 分钟 |
| Phase 4 | GA4 + GTM 接入 | 15 分钟 |
| Phase 5 | 博客内容（3 篇种子文章） | 1 个对话 |
| Phase 6 | 关键词扩展（SEMrush 拉数据） | site-keywords 流程 |
