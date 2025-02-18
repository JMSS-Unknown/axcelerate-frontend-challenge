import 'assets/css/colours.css'
import 'assets/css/styles.css'
import SearchableList from 'components/SearchableList'

import classes from './app.module.css'

import thumbnail1 from 'assets/images/thumbnail_person_1.png'
import thumbnail2 from 'assets/images/thumbnail_person_2.png'
import thumbnail3 from 'assets/images/thumbnail_person_3.png'
import thumbnail4 from 'assets/images/thumbnail_person_4.png'
import thumbnail5 from 'assets/images/thumbnail_person_5.png'
import thumbnail6 from 'assets/images/thumbnail_person_6.png'
import thumbnail7 from 'assets/images/thumbnail_person_7.png'
import thumbnail8 from 'assets/images/thumbnail_person_8.png'
import thumbnail9 from 'assets/images/thumbnail_person_9.png'
import thumbnail10 from 'assets/images/thumbnail_person_10.png'

function App() {
  return (
    <div className={classes.page}>
      <div>
        <h1>aXcelerate Frontend Challenge</h1>
        <SearchableList
          sections={[
            {
              header: 'Attended',
              contacts: [
                { imageSrc: thumbnail1, name: 'Dianne Russell' },
                { imageSrc: thumbnail2, name: 'Ronald Richards' },
                { imageSrc: thumbnail3, name: 'Arlene McCoy' },
                { imageSrc: thumbnail4, name: 'Kathryn Murphy' },
                { imageSrc: thumbnail5, name: 'Savannah Nyugen' },
                { imageSrc: thumbnail6, name: 'Albert Flores' },
              ],
            },
            {
              header: 'Absent',
              contacts: [
                { imageSrc: thumbnail7, name: 'Jenny Wilson' },
                { imageSrc: thumbnail8, name: 'Wade Warren' },
                { imageSrc: thumbnail9, name: 'Bessie Cooper' },
                { imageSrc: thumbnail10, name: 'Ralph Edwards' },
              ],
            },
          ]}
        />
      </div>
    </div>
  )
}

export default App
