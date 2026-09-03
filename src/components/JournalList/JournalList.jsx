import { useContext, useMemo } from 'react';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import styles from './JournalList.module.css';
import { UserContext } from '../../context/user.context';

function JournalList({ items, setItem }) {
	const { userId } = useContext(UserContext);

	const sortItems = (a, b) => {
		if (a.date > b.date) {
			return -1;
		} else {
			return 1;
		}
	};

	const filteredItems = useMemo(() => [...items]
		.filter(el => el.userId === userId)
		.sort(sortItems), [items, userId]);

	return (
		<div className={styles['journal-list']}>
			{items.length === 0 ? (
				<p>Записей пока нет, добавьте первую</p>
			) : (
				[...filteredItems]
					.map(el => (
						<CardButton className={styles.button} key={el.id} onClick={() => setItem(el)}>
							<JournalItem
								title={el.title}
								text={el.post}
								date={el.date}
							/>
						</CardButton>
					))
			)}
		</div>
	);
}

export default JournalList;