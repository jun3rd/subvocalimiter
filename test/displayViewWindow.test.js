const displayViewWindow = require('../src/displayViewWindow')

const data_sample = { intro: "Diplomacy is one of the highest of the political arts. In a well-ordered commonwealth it would be held in the esteem due to a great public service in whose hands the safety of the people largely lies; and it would thus attract to its ranks its full share of national ability and energy which for the most part to-day passes into other professions. But the diplomatic service, at all times, and in almost all countries, has suffered from lack of public appreciation: though perhaps at no time has it had so many detractors as to-day. Its almost unparalleled unpopularity is due to a variety of causes, some of which are temporary and removable, while others must be permanent in human affairs, for they were found to operate in the days when the author of this little book shone in French diplomacy. The major cause is public neglect; but it is also due, in no small measure, to the prevalent confusion between policy, which is the substance, and diplomacy proper, which is the process by which it is carried out. This confusion exists not only in the popular mind, but even in the writings of historians who might be expected to practise a better discernment. Policy is the concern of governments. Responsibility therefore belongs to the Secretary of State who directs policy and appoints the agents of it. But the constitutional doctrine of ministerial responsibility is not an unvarying reality. No one will maintain that Lord Cromer’s success in Egypt was due to the wisdom of Whitehall, or to anything but his own sterling qualities. Nor can a just judgment of our recent Balkan diplomacy fail to assign a heavy share of the blame to the incompetence of more than one ‘man on the spot.’ The truth is, that the whole system, of which, in their different measure, Downing Street and the embassies abroad are _both_ responsible parts, is not abreast of the needs of the time, and will not be until Callières’s excellent maxims become the common practice of the service." }
const data_sample_REDUCED = "Diplomacy is one of the highest of the political arts."

const reading_level = [1, 1, 2, 3, 5, 8] // fibonacci

describe('display text in view window', () => {
    test('reading level 1 is one word per line', () => {
        expect(displayViewWindow(data_sample_REDUCED, reading_level[1])).toEqual(["Diplomacy", "is", "one", "of", "the", "highest", "of", "the", "political", "arts."])
    })
    test('reading level 2 is two word per line', () => {
        expect(displayViewWindow(data_sample_REDUCED, reading_level[2])).toEqual(["Diplomacy is", "one of", "the highest", "of the", "political arts."])
    })
    xtest('reading level 3 is two word per line', () => {
        expect(displayViewWindow(data_sample_REDUCED, reading_level[3])).toEqual(["Diplomacy is one", "of the highest", "of the political", "arts."])
    })
})


