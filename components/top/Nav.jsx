import React from 'react'
import styles from "@/styles/top/nav.module.css"
import Link from 'next/link'

const Nav = () => {
  return (
    <>
        <div className={styles.wrap}>
            <ul className={styles.global_nav}>
                <ul className={styles.top_nav}>
                    <li><Link href="https://ppp-wedding.com/">公式サイトTOP</Link></li>
                    <li><a href="https://ppp-wedding.com/">フォトウェディングTOP</a></li>
                </ul>
                <ul className={styles.service_nav}>
                    <li><Link href="/">ロケーション</Link></li>
                    <li><Link href="/">プラン一覧</Link></li>
                    <li><Link href="/">ギャラリー</Link></li>
                    <li><Link href="/">Q & A</Link></li>
                    <li><Link href="/">ロケーション</Link></li>
                    <li><Link href="/">プラン一覧</Link></li>
                    <li><Link href="/">ギャラリー</Link></li>
                    <li><Link href="/">Q & A</Link></li>
                </ul>
            </ul>
        </div>
    </>
  )
}

export default Nav