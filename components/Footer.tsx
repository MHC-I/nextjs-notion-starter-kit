import * as React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <a target="_blank"> Powered by </a>
        <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank"> 又拍云 </a>
        <a href="https://github.com/transitive-bullshit/nextjs-notion-starter-kit" target="_blank"> Nextjs </a>
        <a href="https://vercel.com" target="_blank"> Vercel </a>
        <a href="https://www.notion.so" target="_blank"> Notion </a>
      </div>
      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title='Tottle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}

      <div className={styles.copyright}>
        <a href="https://beian.miit.gov.cn" target="_blank">滇ICP备2020007367号-2</a>
      </div>
    </footer>
  )
}
