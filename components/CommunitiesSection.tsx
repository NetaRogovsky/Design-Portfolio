'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react';
import { communities, type Community } from '@/data/communities';
import { CommunityModal } from './CommunityModal';
import styles from './CommunitiesSection.module.css';

export function CommunitiesSection() {
  const [selected, setSelected] = useState<Community | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const reduced = useReducedMotion();
  const close = useCallback(() => setSelected(null), []);
  return <LayoutGroup id="communities">
    <section className={styles.section} id="communities" aria-labelledby="communities-title">
      <h2 id="communities-title">My Communities</h2>
      <div className={styles.grid}>{communities.map(community => <motion.button
        key={community.id} className={styles.card} layoutId={reduced ? undefined : community.id}
        aria-label={`Open details for ${community.name}`} aria-haspopup="dialog"
        whileHover={reduced ? undefined : { y: -5, scale: 1.02 }}
        onClick={event => { opener.current = event.currentTarget; setSelected(community); }}
      ><Image src={community.logo} alt={`${community.name} logo`} width={220} height={220} /></motion.button>)}</div>
    </section>
    <AnimatePresence onExitComplete={() => opener.current?.focus()}>
      {selected && <CommunityModal key={selected.id} community={selected} onClose={close} reduced={!!reduced} />}
    </AnimatePresence>
  </LayoutGroup>;
}
