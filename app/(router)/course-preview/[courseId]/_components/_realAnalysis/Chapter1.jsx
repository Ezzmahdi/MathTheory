import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function ConstructingRationalNumbers() {
  return (
    <div className="prose max-w-none p-4">
      <h2 className="text-2xl font-semibold">Chapter 1: Constructing <InlineMath math="\mathbb{Q}" /></h2>
      <hr className="my-4" />

      <h4 className="text-lg font-semibold mt-4">Introduction: The Problem with Fractions</h4>
      <p>
        Let's start with a simple scenario: imagine you have a cake divided into three equal parts, and you take one piece. We describe this as having one-third of the cake. But what if you had divided the same cake into six equal pieces and taken two of them? Intuitively, you’d still have the same amount of cake, even though it’s represented differently.
      </p>
      <p>
        In mathematical terms, we write these two quantities as fractions:
      </p>
      <BlockMath math="\frac{1}{3} \quad \text{and} \quad \frac{2}{6}." />
      <p>
        These fractions look different but represent the same quantity. This leads us to an important question:
      </p>
      <blockquote className="italic">
        How do we formally define fractions as mathematical objects?
      </blockquote>
      <p>
        To solve this, we need a way to handle these "different" but equivalent representations. The solution involves defining fractions as <strong>equivalence classes</strong> of ordered pairs of integers.
      </p>

      <hr className="my-4" />

      <h4 className="text-lg font-semibold">Step 1: Defining Rational Numbers as Ordered Pairs</h4>
      <p>
        To begin, let’s represent fractions as ordered pairs of integers. For example:
      </p>
      <BlockMath math="\frac{1}{3} \quad \text{can be represented as the pair} \quad (1, 3)." />
      <p>
        More generally, any fraction <InlineMath math="\frac{m}{n}" /> can be written as the pair <InlineMath math="(m, n)" />, where:
      </p>
      <ul className="list-disc list-inside">
        <li><InlineMath math="m" /> is the numerator.</li>
        <li><InlineMath math="n" /> is the denominator (<InlineMath math="n \neq 0" />, since division by zero is undefined).</li>
      </ul>
      <p>
        However, as we've seen with <InlineMath math="\frac{1}{3} = \frac{2}{6}" />, multiple pairs can represent the same fraction. To account for this, we need a formal way to identify these "equivalent" pairs.
      </p>

      <hr className="my-4" />

      <h4 className="text-lg font-semibold">Step 2: Introducing an Equivalence Relation</h4>
      <p>
        We define an <strong>equivalence relation</strong> on the set of ordered pairs of integers <InlineMath math="(m, n)" />, where <InlineMath math="n \neq 0" />.
      </p>

      <h5 className="text-md font-semibold">Definition: Equivalence of Ordered Pairs</h5>
      <p>
        Two pairs <InlineMath math="(m_1, n_1)" /> and <InlineMath math="(m_2, n_2)" /> are considered equivalent, written as:
      </p>
      <BlockMath math="(m_1, n_1) \sim (m_2, n_2)" />
      <p>
        if and only if:
      </p>
      <BlockMath math="m_1 \cdot n_2 = m_2 \cdot n_1." />
      <p>
        This condition mirrors the familiar "cross-multiplication" rule you learned in school for checking if two fractions are equal:
      </p>
      <BlockMath math="\frac{m_1}{n_1} = \frac{m_2}{n_2} \quad \text{if and only if} \quad m_1 \cdot n_2 = m_2 \cdot n_1." />

      <h5 className="text-md font-semibold">Examples:</h5>
      <ol className="list-decimal list-inside">
        <li>
          <InlineMath math="(1, 3) \sim (2, 6)" /> because <InlineMath math="1 \cdot 6 = 2 \cdot 3" />.
        </li>
        <li>
          <InlineMath math="(3, 4) \sim (6, 8)" /> because <InlineMath math="3 \cdot 8 = 4 \cdot 6" />.
        </li>
        <li>
          <InlineMath math="(2, 5) \not\sim (3, 5)" /> because <InlineMath math="2 \cdot 5 \neq 3 \cdot 5" />.
        </li>
      </ol>

      <hr className="my-4" />

      <h4 className="text-lg font-semibold">Step 3: Constructing <InlineMath math="\mathbb{Q}" /> (The Rational Numbers)</h4>
      <p>
        Now that we have an equivalence relation, we define the set of rational numbers <InlineMath math="\mathbb{Q}" /> as follows:
      </p>
      <BlockMath math="\mathbb{Q} = \{ (m, n) \mid m, n \in \mathbb{Z}, n \neq 0 \} / \sim" />
      <p>
        In plain terms:
      </p>
      <ul className="list-disc list-inside">
        <li><strong>Each rational number</strong> is an equivalence class of pairs <InlineMath math="(m, n)" /> under the equivalence relation <InlineMath math="\sim" />.</li>
        <li>For example, the equivalence class of <InlineMath math="(1, 3)" /> includes all pairs like <InlineMath math="(2, 6), (3, 9), (10, 30), \dots" />.</li>
      </ul>
      <p>
        We often denote this equivalence class by the fraction <InlineMath math="\frac{m}{n}" />. For instance:
      </p>
      <BlockMath math="\frac{1}{3} = \{(1, 3), (2, 6), (3, 9), \dots\}." />

      <hr className="my-4" />

      <h4 className="text-lg font-semibold">Step 4: Embedding Integers into <InlineMath math="\mathbb{Q}" /></h4>
      <p>
        It’s natural to ask: <em>How do integers fit into this framework?</em>
      </p>
      <p>
        We want to embed the integers <InlineMath math="\mathbb{Z}" /> into <InlineMath math="\mathbb{Q}" />. This means each integer <InlineMath math="n \in \mathbb{Z}" /> should correspond to a rational number. The obvious choice is:
      </p>
      <BlockMath math="n \mapsto \frac{n}{1}." />
      <p>
        For example:
      </p>
      <ul className="list-disc list-inside">
        <li><InlineMath math="5 \in \mathbb{Z}" /> corresponds to the equivalence class <InlineMath math="\frac{5}{1}" />.</li>
        <li><InlineMath math="-3 \in \mathbb{Z}" /> corresponds to <InlineMath math="\frac{-3}{1}" />.</li>
      </ul>
      <p>
        Thus, <InlineMath math="\mathbb{Z}" /> is "embedded" within <InlineMath math="\mathbb{Q}" />, and we can think of <InlineMath math="\mathbb{Q}" /> as an extension of <InlineMath math="\mathbb{Z}" />.
      </p>

      <hr className="my-4" />

      <h4 className="text-lg font-semibold">Step 5: Verifying the Equivalence Relation</h4>
      <p>
        To ensure our equivalence relation <InlineMath math="\sim" /> is valid, we need to check three properties:
      </p>

      <h5 className="text-md font-semibold">1. Reflexivity:</h5>
      <BlockMath math="(m, n) \sim (m, n)" />
      <p>
        <strong>Proof</strong>: By definition, <InlineMath math="m \cdot n = m \cdot n" />, which is trivially true.
      </p>

      <h5 className="text-md font-semibold">2. Symmetry:</h5>
      <p>
        If <InlineMath math="(m_1, n_1) \sim (m_2, n_2)" />, then <InlineMath math="(m_2, n_2) \sim (m_1, n_1)" />.
      </p>
      <p>
        <strong>Proof</strong>: Given <InlineMath math="m_1 \cdot n_2 = m_2 \cdot n_1" />, it follows by commutativity that <InlineMath math="m_2 \cdot n_1 = m_1 \cdot n_2" />.
      </p>

      <h5 className="text-md font-semibold">3. Transitivity:</h5>
      <p>
        If <InlineMath math="(m_1, n_1) \sim (m_2, n_2)" /> and <InlineMath math="(m_2, n_2) \sim (m_3, n_3)" />, then <InlineMath math="(m_1, n_1) \sim (m_3, n_3)" />.
      </p>
      <p>
        <strong>Proof</strong>: Given <InlineMath math="m_1 \cdot n_2 = m_2 \cdot n_1" /> and <InlineMath math="m_2 \cdot n_3 = m_3 \cdot n_2" />, multiplying these yields <InlineMath math="m_1 \cdot n_3 = m_3 \cdot n_1" />.
      </p>

      <p className="mt-4">This concludes our construction of <InlineMath math="\mathbb{Q}" />!</p>

      <hr className="my-4" />

      <h4 className="text-lg font-semibold">Step 6: The Arithmetic of <InlineMath math="\mathbb{Q}" /></h4>
      <p>
        Now that we’ve defined <InlineMath math="\mathbb{Q}" />, we’ll want to define operations like addition and multiplication. However, we’ll save that for the next chapter. As a teaser, consider the sum of two fractions:
      </p>
      <BlockMath math="\frac{1}{3} + \frac{2}{3} = \frac{3}{3} = 1." />
      <BlockMath math="\frac{3}{1} + \frac{3}{2} = \frac{3}{3} = 1." />
      <p>
        Behind this seemingly simple operation is the equivalence relation <InlineMath math="\sim" />.
      </p>

      <hr className="my-4" />

      <h4 className="text-lg font-semibold">Conclusion</h4>
      <p>
        In this chapter, we’ve built <InlineMath math="\mathbb{Q}" /> from scratch:
      </p>
      <ol className="list-decimal list-inside">
        <li>Started with intuitive ideas about fractions.</li>
        <li>Defined rational numbers as equivalence classes of ordered pairs.</li>
        <li>Verified the equivalence relation.</li>
        <li>Embedded integers into rational numbers.</li>
      </ol>
      <p>
        Next, we’ll explore how to perform arithmetic on these rational numbers and see how they form a field. Stay tuned!
      </p>
    </div>
  );
}

export default ConstructingRationalNumbers;
