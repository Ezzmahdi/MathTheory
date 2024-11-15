import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';

const Countability = () => (
  <div className="space-y-8 p-4">
    <h1 className="text-2xl font-bold  ">Chapter 7: Countability and Cardinality</h1>
    <p className="text-lg">
      In this chapter, we explore the concept of countability and how it relates to different types of sets. We will discuss how certain sets can be counted (i.e., listed in an ordered way), and how some sets, despite being infinite, cannot be counted. Let's break this down into several key concepts.
    </p>

    <h2 className="text-xl font-semibold  ">1. Introducing Subsets and Countability</h2>
    <p>
      Let's begin by discussing subsets of a set. Consider a set <i>E</i> of natural numbers. We want to create a new sequence <i>X<sub>n</sub></i> that lists elements from <i>E</i>, but with the requirement that each element in <i>X<sub>n</sub></i> is larger than any previous element. For example, we can take the third element of the original set as the first element of the new sequence, the fourth element as the second element, and so on. This process helps us understand how we can reorder elements while maintaining the order of the original set.
    </p>
    <p>
      We can generalize this approach for any subset of natural numbers. By carefully selecting elements from the set and ensuring that each selected element is greater than all previous ones, we can create a listing of any subset of natural numbers, showing that such sets are countable.
    </p>

    <h2 className="text-xl font-semibold  ">2. The Countability of the Natural Numbers and Integers</h2>
    <p>
      We have shown that natural numbers are countable, as we can list all their elements in an ordered sequence. But what about the integers? Are they countable?
    </p>
    <p>
      The integers <InlineMath math="\mathbb{Z}" /> are countable as well. To prove this, we can create a listing of all the integers. One common method is to alternate between positive and negative numbers, starting with zero:
    </p>
    <p className="text-center text-xl">
      0, 1, −1, 2, −2, 3, −3, …
    </p>
    <p>
      By doing this, we show that the integers can be arranged in a sequence, meaning they are countable.
    </p>

    <h2 className="text-xl font-semibold  ">3. The Countability of the Rational Numbers</h2>
    <p>
      Next, we turn our attention to the rational numbers, <InlineMath math="\mathbb{Q}" />, which consist of all numbers that can be written as fractions of integers (e.g., <BlockMath math="\frac{1}{2}" />, <BlockMath math="\frac{3}{4}" />, <BlockMath math="\frac{-5}{7}" />).
    </p>
    <p>
      The question we want to answer is: Are the rational numbers countable?
    </p>
    <p>
      The answer is yes! The rational numbers are countable. To prove this, we can arrange the positive rational numbers as ordered pairs of natural numbers. Consider the following array where each entry represents a rational number:
    </p>
    <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg">
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><InlineMath math="\frac{1}{1}" /></td>
            <td><InlineMath math="\frac{2}{1}" /></td>
            <td><InlineMath math="\frac{3}{1}" /></td>
            <td><InlineMath math="\frac{4}{1}" /></td>
            <td><InlineMath math="\frac{5}{1}" /></td>
            <td>...</td>
          </tr>
          <tr>
            <td>2</td>
            <td><InlineMath math="\frac{1}{2}" /></td>
            <td><InlineMath math="\frac{2}{2}" /></td>
            <td><InlineMath math="\frac{3}{2}" /></td>
            <td><InlineMath math="\frac{4}{2}" /></td>
            <td><InlineMath math="\frac{5}{2}" /></td>
            <td>...</td>
          </tr>
          <tr>
            <td>3</td>
            <td><InlineMath math="\frac{1}{3}" /></td>
            <td><InlineMath math="\frac{2}{3}" /></td>
            <td><InlineMath math="\frac{3}{3}" /></td>
            <td><InlineMath math="\frac{4}{3}" /></td>
            <td><InlineMath math="\frac{5}{3}" /></td>
            <td>...</td>
          </tr>
          <tr>
            <td>4</td>
            <td><InlineMath math="\frac{1}{4}" /></td>
            <td><InlineMath math="\frac{2}{4}" /></td>
            <td><InlineMath math="\frac{3}{4}" /></td>
            <td><InlineMath math="\frac{4}{4}" /></td>
            <td><InlineMath math="\frac{5}{4}" /></td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Notice that each rational number can be found somewhere in this two-dimensional grid. To list them in a sequence, we can zigzag through the array diagonally. By following this diagonal path, we can systematically list every rational number.
    </p>
    <p>
      However, we need to be careful to skip over any duplicate fractions, such as <InlineMath math="\frac{2}{2}" /> and <InlineMath math="\frac{4}{4}" />, because they represent the same rational number. Once we remove these duplicates, we can see that all rational numbers are indeed countable.
    </p>

    <h2 className="text-xl font-semibold  ">4. The Countability of <InlineMath math="\mathbb{Q}^+" /> (Positive Rationals)</h2>
    <p>
      To show that <InlineMath math="\mathbb{Q}^+" /> (the set of positive rational numbers) is countable, we can use the following trick. We first list all the positive rationals in the previously described two-dimensional grid. Then, we can arrange the negative rationals by reflecting the positive rationals across the origin. This creates a bijection between <InlineMath math="\mathbb{Q}^+" /> and <InlineMath math="\mathbb{Q}" />, which means the set of rational numbers is countable.
    </p>

    <h2 className="text-2xl font-bold  ">5. The Real Numbers and Uncountability</h2>
    <p>
      Now we face a deeper question: Are the real numbers countable?
    </p>
    <p>
      To answer this, we need to prove that the real numbers cannot be listed in a sequence. We will do this by contradiction. Suppose that we could list all the real numbers in a sequence, like so:
    </p>
    <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg">
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>0.123456</td>
            <td>...</td>
          </tr>
          <tr>
            <td>2</td>
            <td>0.654321</td>
            <td>...</td>
          </tr>
          <tr>
            <td>3</td>
            <td>0.987654</td>
            <td>...</td>
          </tr>
          <tr>
            <td>4</td>
            <td>0.112233</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Now, we will construct a new real number <InlineMath math="X^*" /> that does not appear in this list. We do this by ensuring that the <i>n</i>-th digit of <InlineMath math="X^*" /> differs from the <i>n</i>-th digit of the <i>n</i>-th real number in the sequence. For example:
    </p>
    <ul className="list-disc pl-8">
      <li>If the first digit of the first number is 1, we change it to 2.</li>
      <li>If the second digit of the second number is 5, we change it to 6.</li>
      <li>If the third digit of the third number is 3, we change it to 4.</li>
    </ul>
    <p>
      By following this process for every number in the sequence, we create a new real number <InlineMath math="X^*" /> that differs from every number in the list at some decimal place. Therefore, <InlineMath math="X^*" /> cannot be in the list, which contradicts our assumption that we could list all real numbers.
    </p>
    <p>
      Thus, we conclude that the real numbers are <strong>uncountable</strong>.
    </p>

    <hr className="my-8 border-gray-300" />

    <h2 className="text-2xl font-bold  ">6. Cardinality of Sets</h2>
    <p>
      At this point, we have demonstrated that some infinite sets are countable (e.g., the natural numbers, integers, and rationals) and others are uncountable (e.g., the real numbers). This leads to the concept of <strong>cardinality</strong> — the "size" of a set.
    </p>
    <ul className="list-disc pl-8">
      <li>The natural numbers, integers, and rational numbers all have the same cardinality, called <strong>countable infinity</strong>.</li>
      <li>The real numbers have a larger cardinality, called <strong>uncountable infinity</strong>.</li>
    </ul>
    <p>
      This introduces the idea that there are different sizes of infinity. There are infinitely many sets with various sizes of infinity. For example, the set of all functions from <InlineMath math="\mathbb{R}" /> to <InlineMath math="\mathbb{R}" /> has an even larger cardinality than the real numbers themselves.
    </p>

    <hr className="my-8 border-gray-300" />

    <h2 className="text-2xl font-bold  ">7. The Power Set and Cantor's Diagonalization Argument</h2>
    <p>
      One fascinating result in set theory is that for any set <strong>A</strong>, the power set of <strong>A</strong> (the set of all subsets of <strong>A</strong>) has a larger cardinality than <strong>A</strong> itself. This was proven by <strong>Cantor’s diagonalization argument</strong>.
    </p>
    <p>
      Cantor showed that the power set of a set <strong>A</strong>, denoted <InlineMath math="2^A" />, has a strictly larger cardinality than <strong>A</strong>. This idea can be generalized using a diagonalization argument similar to the one we used to prove that the real numbers are uncountable.
    </p>

    <hr className="my-8 border-gray-300" />

    <h2 className="text-2xl font-bold  ">8. The Continuum Hypothesis</h2>
    <p>
      Finally, there is an open question in set theory called the <strong>Continuum Hypothesis</strong>. It asks whether there is a cardinality strictly between that of the natural numbers (countable infinity) and the real numbers (uncountable infinity). This question was proven to be undecidable within the framework of standard set theory — that is, it is neither provable nor disprovable.
    </p>

    <h2 className="text-2xl font-bold  ">Conclusion</h2>
    <p>
      In this chapter, we explored the concept of countability and how it applies to various sets. We saw that while sets like the natural numbers, integers, and rationals are countable, the real numbers are uncountable. This leads us into the study of cardinality and the fascinating fact that there are different sizes of infinity. 
    </p>
    <p>
      Cantor’s work on diagonalization and the power set provides us with a deeper understanding of these ideas, and the Continuum Hypothesis remains an intriguing open problem in set theory.
    </p>
  </div>
);

export default Countability;
