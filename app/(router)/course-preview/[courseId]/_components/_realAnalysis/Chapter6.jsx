import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Induction() {
  return (
    <section className="space-y-8">
      <h3 className="text-xl font-bold mt-4">Chapter 6: Mastering Mathematical Induction</h3>

      <p className="text-lg">
        In this chapter, we'll dive deeper into <strong>mathematical induction</strong>, a powerful tool in proving statements about integers. We'll start with a clear explanation of how induction works, explore common pitfalls, and then move on to advanced techniques and examples.
      </p>

      <hr className="border-t-2" />

      <h2 className="text-xl font-semibold">6.1 What Is Mathematical Induction?</h2>
      <p className="text-lg">
        Mathematical induction is a method of proving that a statement <InlineMath math="P(n)" /> is true for all positive integers <InlineMath math="n" />. Here's the basic idea:
      </p>
      
      <ol className="list-decimal pl-6 text-lg">
        <li><strong>Base Case</strong>: Show that <InlineMath math="P(1)" /> (or sometimes <InlineMath math="P(0)" />) is true.</li>
        <li><strong>Inductive Step</strong>: Assume <InlineMath math="P(k)" /> is true for some arbitrary <InlineMath math="k \geq 1" />. This is called the <strong>inductive hypothesis</strong>. Now, use this assumption to prove that <InlineMath math="P(k+1)" /> is also true.</li>
      </ol>

      <p className="text-lg">
        If both steps are successful, you can conclude that <InlineMath math="P(n)" /> is true for all <InlineMath math="n" />.
      </p>

      <h3 className="text-lg font-semibold">Why Does This Work?</h3>
      <p className="text-lg">
        Think of it like climbing a ladder:
      </p>
      <ul className="list-disc pl-6 text-lg">
        <li><strong>Base Case</strong>: You show you can stand on the first rung.</li>
        <li><strong>Inductive Step</strong>: You show that if you can stand on one rung, you can climb to the next.</li>
      </ul>
      <p className="text-lg">
        Together, these steps ensure you can reach any rung of the ladder.
      </p>

      <hr className="border-t-2" />

      <h2 className="text-xl font-semibold">6.2 Step-by-Step Example: Sum of First <InlineMath math="n" /> Natural Numbers</h2>
      <p className="text-lg">
        <strong>Statement:</strong> The sum of the first <InlineMath math="n" /> natural numbers is given by:
      </p>
      <p className="text-lg">
        <BlockMath math="S_n = 1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}" />
      </p>

      <h3 className="text-lg font-semibold">Proof by Induction</h3>
      
      <ol className="list-decimal pl-6 text-lg">
        <li><strong>Base Case</strong> (<InlineMath math="n=1" />): <InlineMath math={`S_1 = 1`} /> and <InlineMath math="1 = \frac{1(1+1)}{2}" />.</li>
        <li><strong>Inductive Step</strong>: Assume the formula holds for <InlineMath math="n = k" />: <BlockMath math="S_k = \frac{k(k+1)}{2}" />. We need to prove it for <InlineMath math="n = k+1" />. Start by expanding <InlineMath math="S_{k+1}" />:</li>
        <p className="text-lg">
          <BlockMath math="S_{k+1} = S_k + (k+1)" />
        </p>
        <p className="text-lg">
          Substitute the inductive hypothesis <InlineMath math="S_k = \frac{k(k+1)}{2}" />:
        </p>
        <p className="text-lg">
          <BlockMath math="S_{k+1} = \frac{k(k+1)}{2} + (k+1)" />
        </p>
        <p className="text-lg">
          Factor out <InlineMath math="(k+1)" />:
        </p>
        <p className="text-lg">
          <BlockMath math="S_{k+1} = \frac{(k+1)(k+2)}{2}" />
        </p>
        <p className="text-lg">
          This matches the formula for <InlineMath math="n = k+1" />. Thus, the inductive step holds.
        </p>
        
        <p className="text-lg">
          By induction, the formula is true for all <InlineMath math="n" />.
        </p>
      </ol>

      <hr className="border-t-2" />

      <h2 className="text-xl font-semibold">6.3 Common Misconceptions and Pitfalls</h2>
      <p className="text-lg">
        While induction is straightforward, there are common mistakes that can derail your proof. Let’s examine these pitfalls.
      </p>

      <h3 className="text-lg font-semibold">Misconception 1: Skipping the Base Case</h3>
      <p className="text-lg">
        Some students skip the base case, thinking it’s unnecessary. However, without it, your proof is incomplete. If the base case isn’t true, induction cannot proceed.
      </p>
      <p className="text-lg">
        <strong>Example:</strong> Suppose we claim that for all <InlineMath math="n \geq 1" />:
      </p>
      <BlockMath math="n^2 > n" />
      <p className="text-lg">
        Let's prove this using induction (incorrectly).
      </p>
      <ol className="list-decimal pl-6 text-lg">
        <li><strong>Base Case</strong> (<InlineMath math="n=1" />): Here, <InlineMath math="1^2 = 1" />, but <InlineMath math="1 \not> 1" />. The base case fails, so the statement is false for <InlineMath math="n=1" />. Skipping this check would have led to an invalid proof.</li>
      </ol>

      <h3 className="text-lg font-semibold">Misconception 2: Weak Inductive Hypothesis</h3>
      <p className="text-lg">
        The inductive hypothesis must be strong enough to bridge the base case to all <InlineMath math="n" />. Sometimes, you need to <strong>strengthen the hypothesis</strong> to make it work.
      </p>

      <hr className="border-t-2" />

      <h2 className="text-xl font-semibold">6.4 Strengthening the Inductive Hypothesis</h2>
      <p className="text-lg">
        In some problems, proving <InlineMath math="P(k) \implies P(k+1)" /> directly might not be enough. You may need to assume something more than <InlineMath math="P(k)" />.
      </p>

      <h3 className="text-lg font-semibold">Example: Dominoes with Extra Weight</h3>
      <p className="text-lg">
        Imagine you are proving that you can knock over a series of dominoes, each one slightly heavier than the last.
      </p>
      <ul className="list-disc pl-6 text-lg">
        <li><strong>Naive Hypothesis</strong>: Each domino can knock over the next.</li>
        <li><strong>Stronger Hypothesis</strong>: Each domino not only knocks over the next but transfers enough momentum to keep knocking over heavier dominoes.</li>
      </ul>
      <p className="text-lg">
        Without the stronger hypothesis, you might fail to prove the later steps.
      </p>

      <hr className="border-t-2" />

      <h2 className="text-xl font-semibold">6.5 Advanced Example: All Horses Are the Same Color</h2>
      <p className="text-lg">
        This is a classic problem designed to demonstrate a flaw in induction when it’s misapplied.
      </p>

      <p className="text-lg">
        <strong>Claim:</strong> In any group of <InlineMath math="n" /> horses, all horses are the same color.
      </p>

      <h3 className="text-lg font-semibold">"Proof" Attempt</h3>
      <ol className="list-decimal pl-6 text-lg">
        <li><strong>Base Case</strong> (<InlineMath math="n=1" />): In a group of one horse, all horses (just one) are the same color.</li>
        <li><strong>Inductive Step</strong>: Assume that for any group of <InlineMath math="k" /> horses, they all have the same color. Now consider <InlineMath math="k+1" /> horses. Group them into two overlapping sets of <InlineMath math="k" /> horses each:
          <ul className="list-disc pl-6">
            <li>Set 1: Horses 1 through <InlineMath math="k" />.</li>
            <li>Set 2: Horses 2 through <InlineMath math="k+1" />.</li>
          </ul>
          By the inductive hypothesis, all horses in Set 1 are the same color, and all horses in Set 2 are the same color. Since they overlap at <InlineMath math="k" />, they must all be the same color.
        </li>
      </ol>

      <h3 className="text-lg font-semibold">Error</h3>
      <p className="text-lg">
        The flaw occurs when <InlineMath math="k=2" />. The two sets don’t overlap sufficiently to guarantee all <InlineMath math="k+1" /> horses share the same color.
      </p>

      <hr className="border-t-2" />

      <h2 className="text-xl font-semibold">6.6 Beyond Simple Induction: Strong Induction</h2>

      <h3 className="text-lg font-semibold">What is Strong Induction?</h3>
      <p className="text-lg">
        In <strong>strong induction</strong>, instead of assuming <InlineMath math="P(k)" /> alone, we assume all previous statements <InlineMath math="P(1), P(2), \dots, P(k)" /> are true. This allows for stronger conclusions.
      </p>

      <h3 className="text-lg font-semibold">Example: Tiling Problem</h3>
      <p className="text-lg">
        <strong>Problem:</strong> Prove that any <InlineMath math="2^n \times 2^n" /> chessboard with one square removed can be tiled using L-shaped tiles.
      </p>
      
      <ol className="list-decimal pl-6 text-lg">
        <li><strong>Base Case</strong>: For <InlineMath math="n=1" />, a <InlineMath math="2 \times 2" /> chessboard with one square removed can be tiled.</li>
        <li><strong>Inductive Step</strong>: Assume it works for all <InlineMath math="2^k \times 2^k" /> boards. For <InlineMath math="n=k+1" />, divide the <InlineMath math="2^{k+1} \times 2^{k+1}" /> board into four <InlineMath math="2^k \times 2^k" /> sub-boards, removing one square. Use the inductive assumption to tile each sub-board.</li>
      </ol>

      <hr className="border-t-2" />

      <h2 className="text-xl font-semibold">6.7 Exercises</h2>
      <ol className="list-decimal pl-6 text-lg">
        <li><strong>Prove:</strong> The sum of the first <InlineMath math="n" /> odd numbers is <InlineMath math="n^2" />.</li>
        <li><strong>Challenge:</strong> Use strong induction to prove that any amount of postage <InlineMath math="n \geq 12" /> can be made using only 4-cent and 5-cent stamps.</li>
      </ol>

      <hr className="border-t-2" />

      <h2 className="text-xl font-semibold">6.8 Conclusion</h2>
      <p className="text-lg">
        Mathematical induction is a foundational tool in proving statements about integers and beyond. By mastering its nuances, understanding common pitfalls, and exploring variations like strong induction, you’ll be equipped to tackle complex problems confidently.
      </p>
    </section>
  );
}
