import '@fontsource/jost/400.css'
import '@fontsource/jost/500.css'
import '@fontsource/jost/600.css'
import '@fontsource/dm-serif-display/400.css'
import '@fontsource/dm-serif-display/400-italic.css'
import './style.css'

// 모바일 메뉴 토글
const header = document.querySelector('.site-header')
const toggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.site-nav')

function setMenu(open) {
  header.classList.toggle('is-open', open)
  toggle.setAttribute('aria-expanded', String(open))
  toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기')
}

toggle.addEventListener('click', () => {
  setMenu(!header.classList.contains('is-open'))
})

nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false)
})

// 스크롤하면 헤더에 그림자
window.addEventListener(
  'scroll',
  () => header.classList.toggle('is-scrolled', window.scrollY > 10),
  { passive: true },
)

// 스크롤 등장 애니메이션
const revealItems = document.querySelectorAll('.reveal')

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )
  revealItems.forEach((el) => observer.observe(el))
} else {
  revealItems.forEach((el) => el.classList.add('is-visible'))
}

// 푸터 연도
document.getElementById('year').textContent = new Date().getFullYear()
