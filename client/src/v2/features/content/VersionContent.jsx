const VersionContent = ({ className = '' }) => {
  return (
    <div
      className={[
        'terminal terminal-static-line terminal-text-green tab-content px-5 py-3 text-xs',
        className,
      ].join(' ')}
    >
      brandonlin@Brandons-porfolio-site ~ % who am i
      <br />
      <span className="terminal-text-orange whitespace-pre-wrap">
        Brandon Lin's Portfolio {'\t'} version 2.0 {'\t'} Nov 12 16:36 2026{' '}
      </span>
      <br />
      brandonlin@Brandons-porfolio-site ~ % license
      <br />
      <span className="terminal-text-orange whitespace-pre">
        Brandon Lin·2026 {'\t'} All Rights Reserved
      </span>
      <br />
      brandonlin@Brandons-porfolio-site ~ %
      <br />
      <br />
      brandonlin@Brandons-porfolio-site ~ % cd /easter-egg
      <br />
      brandonlin@Brandons-porfolio-site easter-egg % cat easter-egg.txt
      <br />
      <span className="terminal-text-orange whitespace-pre">
        Want to see version 1.0? click{' '}
        <a href="/v1" target="_blank" rel="noopener" className="underline">
          here
        </a>
      </span>
    </div>
  );
};

export { VersionContent };
