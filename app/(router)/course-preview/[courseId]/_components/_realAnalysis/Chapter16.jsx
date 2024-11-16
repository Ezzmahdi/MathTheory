import { InlineMath, BlockMath } from 'react-katex';

const SequentialCompactness = () => {
  return (
    <div className="p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Chapter 16: Convergence and Subsequence Limits</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Understanding Convergence and Subsequence Behavior</h2>
        <p className="mb-3">
          Let’s start with a straightforward question:
        </p>
        <p className="font-semibold mb-3">Does every sequence converge?</p>
        <p className="mb-3">
          To make this clearer, consider a sequence <InlineMath math="(P_n)" />. Suppose we determine that this sequence converges to a specific value, say <InlineMath math="P" />. What happens to its <em>subsequences</em>? Do they also converge? If so, do they converge to the same limit <InlineMath math="P" />? Let's unpack these ideas step by step.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Subsequence Convergence</h2>
        <p className="mb-3">
          A <strong>subsequence</strong> is simply a sequence derived from another sequence by selecting certain elements while maintaining their order. For example, if the sequence <InlineMath math="(P_n)" /> is <InlineMath math="1, 2, 3, 4, 5, \dots" />, then <InlineMath math="1, 3, 5, \dots" /> is a subsequence.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          If <InlineMath math="(P_n)" /> converges to <InlineMath math="P" />, must every subsequence also converge to <InlineMath math="P" />?
        </h3>
        <p className="mb-3">
          The answer is <strong>yes</strong>, and here's why. From a previous discussion, we learned the following property:
        </p>
        <blockquote className="pl-4 border-l-4 border-gray-400 italic mb-3">
          Property: In a convergent sequence, every neighborhood of the limit <InlineMath math="P" /> contains all but finitely many points of the sequence.
        </blockquote>
        <p className="mb-3">
          This means that after a certain point in the sequence, all elements are very close to <InlineMath math="P" />. Since a subsequence consists of points from the original sequence, it must also get arbitrarily close to <InlineMath math="P" />. If the entire sequence approaches <InlineMath math="P" />, any subsequence—no matter how you pick the terms—will still converge to <InlineMath math="P" />.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Example</h3>
        <p className="mb-3">Consider the sequence:</p>
        <BlockMath math="P_n = \frac{1}{n}" />
        <p className="mb-3">This sequence converges to <InlineMath math="0" />. Now take any subsequence, say:</p>
        <BlockMath math="P_{n_k} = \frac{1}{2k}" />
        <p className="mb-3">This subsequence will also converge to <InlineMath math="0" />.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Subsequence Limits for Non-Convergent Sequences</h2>
        <p className="mb-3">
          But what about sequences that don’t converge? Can their subsequences still converge? Surprisingly, the answer is <strong>yes</strong>. Let’s look at an example:
        </p>

        <h3 className="text-lg font-semibold mb-2">Example</h3>
        <p className="mb-3">Take the sequence:</p>
        <BlockMath math="P_n = (-1)^n" />
        <p className="mb-3">
          This sequence alternates between <InlineMath math="1" /> and <InlineMath math="-1" />, so it does not converge. However, it contains subsequences that do converge:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li>Subsequence <InlineMath math="1, 1, 1, \dots" /> converges to <InlineMath math="1" />.</li>
          <li>Subsequence <InlineMath math="-1, -1, -1, \dots" /> converges to <InlineMath math="-1" />.</li>
        </ul>
        <p className="mb-3">So even if a sequence doesn’t converge, it can have <em>convergent subsequences</em>.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Subsequence Limits and Definitions</h2>
        <p className="mb-3">
          We introduce the concept of <strong>subsequential limits</strong>. These are the limits of all possible convergent subsequences of a sequence.
        </p>

        <h3 className="text-lg font-semibold mb-2">Example</h3>
        <p className="mb-3">
          For the sequence <InlineMath math="(-1)^n" />, the subsequential limits are <InlineMath math="1" /> and <InlineMath math="-1" />.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Must Every Sequence Have a Convergent Subsequence?</h2>
        <p className="mb-3">
          Now comes an intriguing question: <strong>Must every sequence contain a convergent subsequence?</strong>
        </p>
        <p className="mb-3">
          Let’s think through this.
        </p>
        <p className="mb-3">Consider the sequence:</p>
        <BlockMath math="1, 2, 3, 4, \dots" />
        <p className="mb-3">
          Does it contain any convergent subsequences? No. No matter how you pick elements to form a subsequence, the values will grow larger without bound. This sequence, like others that diverge to infinity, has no convergent subsequences.
        </p>
        <p className="mb-3">
          However, this failure is specific to <em>unbounded</em> sequences. What if we restrict our focus to bounded sequences?
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">The Bolzano-Weierstrass Theorem</h2>
        <blockquote className="pl-4 border-l-4 border-gray-400 italic mb-3">
          Theorem: Every bounded sequence in <InlineMath math="\mathbb{R}^k" /> contains a convergent subsequence.
        </blockquote>
        <p className="mb-3">
          Let’s break this down:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li>
            <strong>Bounded</strong> means that the sequence stays within some fixed range. In other words, there exists a number <InlineMath math="M" /> such that all terms of the sequence satisfy <InlineMath math="|P_n| \leq M" />.
          </li>
          <li>
            The theorem guarantees that no matter how "chaotic" the sequence looks, as long as it’s bounded, we can find a subsequence that converges.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Why Does This Work?</h2>
        <p className="mb-3">
          The key idea is compactness. In <InlineMath math="\mathbb{R}^k" />, any bounded set is contained within a compact set, and compact sets have the useful property that every sequence within them has a convergent subsequence.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Compactness and Sequential Compactness</h2>
        <blockquote className="pl-4 border-l-4 border-gray-400 italic mb-3">
          Sequential Compactness: A metric space is sequentially compact if every sequence in it has a convergent subsequence.
        </blockquote>
        <p className="mb-3">
          We can then ask: <strong>Does compactness imply sequential compactness?</strong>
        </p>
        <p className="mb-3">The answer is <strong>yes</strong>. In fact, the following theorem holds:</p>
        <blockquote className="pl-4 border-l-4 border-gray-400 italic mb-3">
          Theorem: In a compact metric space, every sequence has a convergent subsequence.
        </blockquote>
        <p className="mb-3">
          This means compact spaces are "small" or "tight" enough that sequences can’t "escape" without eventually settling into a convergent subsequence.
        </p>

        <h3 className="text-lg font-semibold mb-2">Example</h3>
        <p className="mb-3">
          In the space <InlineMath math="[0, 1]" />, consider the sequence:
        </p>
        <BlockMath math="P_n = (-1)^n \cdot \left(1 - \frac{1}{n}\right)" />
        <p className="mb-3">
          This sequence does not converge, but because <InlineMath math="[0, 1]" /> is compact, it must have a convergent subsequence. In this case:
        </p>
        <BlockMath math="P_{2n} = 1 - \frac{1}{2n}" />
        <p className="mb-3">converges to <InlineMath math="1" />.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Proof Sketch for Compactness Implies Sequential Compactness</h2>
        <ol className="list-decimal pl-6 mb-3">
          <li className="mb-2">
            <strong>Finite Range Case:</strong> If the sequence only takes on finitely many distinct values, then one value must appear infinitely often (pigeonhole principle). This constant subsequence converges.
          </li>
          <li className="mb-2">
            <strong>Infinite Range Case:</strong> If the range is infinite, compactness ensures that the sequence has a limit point. From there, you can construct a subsequence converging to this limit.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary and Insights</h2>
        <ul className="list-disc pl-6">
          <li>If a sequence converges, all its subsequences converge to the same limit.</li>
          <li>Even non-convergent sequences can have convergent subsequences.</li>
          <li>The Bolzano-Weierstrass Theorem ensures that bounded sequences in <InlineMath math="\mathbb{R}^k" /> always contain convergent subsequences.</li>
          <li>Compact metric spaces are sequentially compact: every sequence in such a space has a convergent subsequence.</li>
        </ul>
      </section>
    </div>
  );
};

export default SequentialCompactness;
