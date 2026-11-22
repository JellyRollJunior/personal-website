import { INTERESTS } from '../../data/aboutMe.js';

const InterestsContent = () => {
  return (
    <div className="terminal terminal-static-line terminal-text-green tab-content px-5 py-3 text-xs">
      brandon-lin@about ~ % cd interests/ && ls
      <div className="terminal-text-orange flex flex-wrap gap-x-5 whitespace-pre">
        {INTERESTS.map((i) => (
          <span key={i}>{i}/</span>
        ))}
      </div>
      brandon-lin@about interests % cat onyx/intro.txt
      <div className="terminal-text-orange max-w-xs">
        My cat is named Onyx aka Onny aka Onny Pie aka Kitty{'\n'}
        aka Mr.Kitty aka Stinky Kitty aka Meow Meow Girl
      </div>
      brandon-lin@about interests % cat music/favorite-albums.txt
      <div className="terminal-text-orange whitespace-pre">
        Clube da Esquina - Milton Nascimento & Lo Borges{'\n'}
        THRU TRAFFIC - Tohoku Shinkansen{'\n'}
        baduizm - Erykah Badu{'\n'}
        LOVE LIGHT - Yutaka{'\n'}
        VANILLA VILLA - Sunset Rollercoaster
      </div>
      brandon-lin@about interests % cat gaming/favorite-games.txt
      <div className="terminal-text-orange whitespace-pre">
        Fallout New Vegas{'\n'}
        Resident Evil 4{'\n'}
        Trickcal Chibi Go{'\n'}
        Maplestory{'\n'}
        Kirby & the Amazing Mirror
      </div>
      brandon-lin@about interests %
    </div>
  );
};

export { InterestsContent };
