import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function DedekindCutsChapter() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-8">Chapter 3: Constructing the Real Numbers with Dedekind Cuts</h2>
      <hr className="my-6" />

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
        <p className="text-lg mb-4">
          In this chapter, we will discuss how to construct the real numbers using a method known as <strong>Dedekind Cuts</strong>. This method builds the real numbers starting from the set of rational numbers, <InlineMath math="\mathbb{Q}" />, without introducing any new numbers. Instead, we organize the rationals in a particular way that mimics how we think of real numbers. By the end of the chapter, you'll understand how Dedekind cuts help us define real numbers and their properties, such as being an ordered field with the least upper bound property.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">What is a Dedekind Cut?</h3>
        <p className="text-lg mb-4">
          A <strong>Dedekind Cut</strong> is a way of partitioning the set of rational numbers <InlineMath math="\mathbb{Q}" /> into two non-empty subsets such that:
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li>All elements of the first subset are strictly less than all elements of the second subset.</li>
          <li>Every element in the first subset has another element in the first subset that is smaller, and every element in the second subset has another element in the second subset that is larger.</li>
        </ul>
        <p className="text-lg mb-4">
          More formally, a <strong>Dedekind cut</strong> is a subset <InlineMath math="\alpha" /> of the rationals <InlineMath math="\mathbb{Q}" /> that satisfies the following three properties:
        </p>
        <ol className="list-decimal pl-6 text-lg mb-4">
          <li><strong>Non-trivial:</strong> The cut is not empty, and it is not the whole set of rationals. That is, the cut contains some rational numbers but not all of them.</li>
          <li><strong>Closed downwards:</strong> If <InlineMath math="p \in \alpha" />, then any rational number less than <InlineMath math="p" /> must also be in the cut.</li>
          <li><strong>No largest element:</strong> There is no largest element in the cut. If <InlineMath math="p \in \alpha" />, then there must exist some <InlineMath math="r \in \alpha" /> such that <InlineMath math="p < r" />.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Example of a Dedekind Cut</h3>
        <p className="text-lg mb-4">
          To make this clearer, let’s look at a few examples:
        </p>

        <h4 className="text-xl font-semibold mb-2">1. The set of all negative rationals</h4>
        <p className="text-lg mb-4">
          Let <InlineMath math="\alpha = (-\infty, 0)" /> be the set of all negative rational numbers. This set is:
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li><strong>Non-trivial:</strong> It contains numbers like <InlineMath math="-1, -\frac{1}{2}, -0.1" />, but it is not the entire set of rationals.</li>
          <li><strong>Closed downwards:</strong> Any number smaller than, say, <InlineMath math="-1" /> (such as <InlineMath math="-2, -3" />) is also in the set, so it satisfies the "closed downwards" property.</li>
          <li><strong>No largest element:</strong> There is no largest negative rational number; for any negative rational number, we can always find a smaller one.</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">2. The set of rationals less than 2</h4>
        <p className="text-lg mb-4">
          Let <InlineMath math="\beta = (-\infty, 2)" /> be the set of all rationals less than 2. This set is:
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li><strong>Non-trivial:</strong> It contains all rationals less than 2, but does not include 2 itself.</li>
          <li><strong>Closed downwards:</strong> Any rational number less than 2 is included, so it’s closed downwards.</li>
          <li><strong>Largest element:</strong> This set has a problem. The number 2 itself is not included in the set, but there is no largest element. You could argue that 2 is the least upper bound of the set, but there is no rational number in the set that is equal to 2. This means that this set does not meet the "no largest element" property.</li>
        </ul>

        <p className="text-lg mb-4">
          Hence, <InlineMath math="\alpha = (-\infty, 0)" /> is a Dedekind cut, but <InlineMath math="\beta = (-\infty, 2)" /> is not.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Defining the Real Numbers</h3>
        <p className="text-lg mb-4">
          We now define the real numbers <InlineMath math="\mathbb{R}" /> using Dedekind cuts. The set of all Dedekind cuts will form our definition of real numbers:
        </p>
        <BlockMath math="\mathbb{R} = \{ \alpha \subseteq \mathbb{Q} \mid \alpha \text{ is a Dedekind cut} \}" />
        <p className="text-lg mb-4">
          In other words, we define a real number as any Dedekind cut of the rationals. A Dedekind cut represents the idea of a real number by partitioning the rationals into two sets. The "left" side contains all the rationals less than the real number, while the "right" side contains all the rationals greater than or equal to the real number.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Example of Real Numbers Using Dedekind Cuts</h3>
        <p className="text-lg mb-4">
          Let’s see how this definition works with some simple examples:
        </p>

        <h4 className="text-xl font-semibold mb-2">The number 1</h4>
        <p className="text-lg mb-4">
          To define the real number 1, we can take the set of all rationals less than 1. This cut would be:
        </p>
        <BlockMath math="\alpha = \{ r \in \mathbb{Q} \mid r < 1 \}" />
        <p className="text-lg mb-4">
          This is a Dedekind cut because:
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li>It is non-trivial (it contains all rationals less than 1, but not all rationals).</li>
          <li>It is closed downward (for every rational less than 1, that rational is in the set).</li>
          <li>It has no largest element (since for any rational less than 1, we can always find a smaller one).</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">The number 3</h4>
        <p className="text-lg mb-4">
          Similarly, the real number 3 is represented by the set of all rationals less than 3:
        </p>
        <BlockMath math="\beta = \{ r \in \mathbb{Q} \mid r < 3 \}" />
        <p className="text-lg mb-4">
          This set satisfies all the properties of a Dedekind cut, just like the cut for 1.
        </p>

        <h4 className="text-xl font-semibold mb-2">The square root of 2</h4>
        <p className="text-lg mb-4">
          We can define the square root of 2 as the Dedekind cut of all rationals whose square is less than 2. This would be:
        </p>
        <BlockMath math="\gamma = \{ r \in \mathbb{Q} \mid r^2 < 2 \}" />
        <p className="text-lg mb-4">
          This Dedekind cut represents the real number <InlineMath math="\sqrt{2}" />.
        </p>
      </section>


      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Ordering Dedekind Cuts</h3>
        <p className="text-lg mb-4">
          Now that we have defined real numbers as Dedekind cuts, we need to define how to order these real numbers. The natural way to order Dedekind cuts is by set inclusion. For two Dedekind cuts <InlineMath math="\alpha" /> and <InlineMath math="\beta" />, we define <InlineMath math="\alpha < \beta" /> if and only if:
        </p>
        <BlockMath math="\alpha \subset \beta" />
        <p className="text-lg mb-4">
          This means that every rational number in <InlineMath math="\alpha" /> is also in <InlineMath math="\beta" />, but <InlineMath math="\alpha" /> is strictly contained in <InlineMath math="\beta" /> (i.e., <InlineMath math="\alpha \neq \beta" />).
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Arithmetic Operations on Dedekind Cuts</h3>
        <p className="text-lg mb-4">
          Once we have the cuts and an ordering, we need to define arithmetic operations like addition and multiplication on Dedekind cuts.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Addition of Cuts</h3>
        <p className="text-lg mb-4">
          To define the addition of two cuts <InlineMath math="\alpha" /> and <InlineMath math="\beta" />, we create a new cut <InlineMath math="\alpha + \beta" /> that consists of all rationals of the form <InlineMath math="r + s" />, where <InlineMath math="r \in \alpha" /> and <InlineMath math="s \in \beta" />. Formally:
        </p>
        <BlockMath math="\alpha + \beta = \{ r + s \mid r \in \alpha, s \in \beta \}" />
        <p className="text-lg mb-4">
          To verify that this is a valid Dedekind cut, we must check that:
        </p>
        <ol className="list-decimal pl-6 text-lg mb-4">
          <li>It is non-trivial (it contains some rationals but not all).</li>
          <li>It is closed downward (If <InlineMath math="r + s \in \alpha + \beta" />, then any rational less than <InlineMath math="r + s" /> is also in the set.)</li>
          <li>It has no largest element (there’s always a rational larger than any given element in the set).</li>
        </ol>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Multiplication of Cuts</h3>
        <p className="text-lg mb-4">
          Similarly, we can define multiplication of cuts, though the details are more complex. The basic idea is that we define the product <InlineMath math="\alpha \times \beta" /> as the set of all products of elements from <InlineMath math="\alpha" /> and <InlineMath math="\beta" />.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Properties of Dedekind Cuts</h3>
        <p className="text-lg mb-4">
          The set of all Dedekind cuts <InlineMath math="\mathbb{R}" />, equipped with the ordering and arithmetic operations described above, forms a complete ordered field. This means that:
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li><strong>Order:</strong> The cuts are ordered by inclusion, and every Dedekind cut has a least upper bound.</li>
          <li><strong>Arithmetic:</strong> We can add and multiply cuts just as we expect with real numbers.</li>
          <li><strong>Least Upper Bound Property:</strong> Every non-empty subset of real numbers (i.e., Dedekind cuts) that is bounded above has a least upper bound (supremum) in <InlineMath math="\mathbb{R}" />.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="text-lg">
          By using Dedekind cuts, we have constructed the real numbers <InlineMath math="\mathbb{R}" /> from the rationals <InlineMath math="\mathbb{Q}" /> in a way that preserves their properties as an ordered field. The method ensures that every real number can be represented as a Dedekind cut, which partitions the rationals in a precise manner. Understanding Dedekind cuts is a foundational concept in real analysis, providing the basis for more advanced topics in analysis and topology.
        </p>
      </section>
    </div>
  );
}
