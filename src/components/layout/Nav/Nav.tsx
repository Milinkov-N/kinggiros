import { useRef } from 'react'

import { Container } from '..'
import { Button, Dropdown } from 'src/components'
import { OpenCart } from 'src/components/cart'

import useNav from 'src/hooks/useNav'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { COLLECTIONS, PAGES_LINKS } from 'src/consts'

import styles from './Nav.module.css'

const otherBreakpoint = 10

export default function Nav() {
  const navEl = useRef<HTMLElement>(null)
  const navListWidth = useRef(0)
  const openCartWidth = useRef(0)

  const { navResponsive } = useTypedSelector((state) => state.appReducer)

  const { getNavListWidth, getOpenCartWidth } = useNav(
    {
      navEl,
      navListWidth,
      openCartWidth,
    },
    styles
  )

  return (
    <>
      {!navResponsive && (
        <nav className={styles.nav} ref={navEl}>
          <Container className={styles.wrapper}>
            <ul ref={getNavListWidth} className={styles.navList}>
              <CollectionsLinks />
              {/* <DropdownLinks /> */}
              <PagesLinks />
            </ul>
            <OpenCart ref={getOpenCartWidth} className={styles.openCart} />
          </Container>
        </nav>
      )}
    </>
  )
}

function CollectionsLinks() {
  return (
    <>
      {COLLECTIONS.map((collection, index) => {
        const href = collection.isPage
          ? `/${collection.handle}`
          : `/#${collection.handle}`

        while (index < otherBreakpoint) {
          return (
            <li key={collection.tag}>
              <Button
                className={styles.link}
                href={href}
                variant='text'
                size='small'
                label={collection.name}
              />
            </li>
          )
        }
      })}
    </>
  )
}

function DropdownLinks() {
  return (
    <li>
      <Dropdown btnClassName={styles.dropdownBtn}>
        {COLLECTIONS.map((collection, index) => {
          if (index >= otherBreakpoint) {
            const href = collection.isPage
              ? `/${collection.handle}`
              : `/#${collection.handle}`

            return (
              <Dropdown.Item
                key={collection.handle}
                href={href}
                label={collection.name}
              />
            )
          }
        })}
      </Dropdown>
    </li>
  )
}

function PagesLinks() {
  return (
    <>
      {PAGES_LINKS.map((link) => (
        <li key={link.name}>
          <Button
            className={styles.link}
            href={link.href}
            variant='text'
            size='small'
            label={link.name}
          />
        </li>
      ))}
    </>
  )
}
