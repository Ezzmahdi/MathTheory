import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function LimitsAndContinuity() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Chapter 20: Limits and Continuity of Functions</h2>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Part 1: Understanding Limits of Functions</h3>
      <p>
        Let’s begin by revisiting the concept of limits for functions, which forms a cornerstone of mathematical analysis.
        Imagine a function <InlineMath math="f(x)" /> that maps values from one space (say, the real line <InlineMath math="\mathbb{R}" />)
        to another. The idea of a limit is to understand the behavior of <InlineMath math="f(x)" /> as <InlineMath math="x" /> approaches
        a particular point <InlineMath math="p" />.
      </p>
      <p>
        Formally, we say that the limit of <InlineMath math="f(x)" /> as <InlineMath math="x" /> approaches <InlineMath math="p" /> is 
        <InlineMath math="Q" />, written as:
      </p>
      <BlockMath math="\lim_{x \to p} f(x) = Q" />

      <p>
        This means that for every small positive number <InlineMath math="\epsilon" /> (representing how close <InlineMath math="f(x)" />
        should be to <InlineMath math="Q" />), there exists another small number <InlineMath math="\delta" /> (representing how close
        <InlineMath math="x" /> should be to <InlineMath math="p" />) such that whenever <InlineMath math="x" /> is within
        <InlineMath math="\delta" />-distance of <InlineMath math="p" />, <InlineMath math="f(x)" /> is within
        <InlineMath math="\epsilon" />-distance of <InlineMath math="Q" />. In mathematical terms:
      </p>
      <BlockMath math="\text{For every } \epsilon > 0, \text{ there exists a } \delta > 0 \text{ such that if } 0 < |x - p| < \delta, \text{ then } |f(x) - Q| < \epsilon." />

      <p>
        The goal is to establish a precise relationship between <InlineMath math="\delta" /> and <InlineMath math="\epsilon" />,
        ensuring that <InlineMath math="f(x)" /> behaves predictably as <InlineMath math="x" /> nears <InlineMath math="p" />.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold">A Counter-Example: What Happens When the Limit Doesn’t Exist?</h3>
      <p>
        To understand this better, consider the case where <InlineMath math="f(x)" /> does <em>not</em> converge to
        <InlineMath math="Q" /> as <InlineMath math="x \to p" />. This means we can always find some 
        <InlineMath math="\epsilon > 0" /> such that no matter how small <InlineMath math="\delta" /> gets, there will
        be points <InlineMath math="x" /> close to <InlineMath math="p" /> where the distance between 
        <InlineMath math="f(x)" /> and <InlineMath math="Q" /> is still greater than <InlineMath math="\epsilon" />.
      </p>
      <p>
        To illustrate this, let’s construct a sequence of points. Suppose that for every 
        <InlineMath math="\delta > 0" />, there exists an <InlineMath math="x" /> within this 
        <InlineMath math="\delta" />-distance of <InlineMath math="p" /> such that 
        <InlineMath math="|f(x) - Q| > \epsilon" />. This implies that <InlineMath math="f(x)" /> is not getting
        closer to <InlineMath math="Q" />, no matter how close <InlineMath math="x" /> is to <InlineMath math="p" />.
      </p>
      <p>
        To make this more concrete, let’s choose a sequence <InlineMath math="\{x_n\}" /> where each term satisfies 
        <InlineMath math="|x_n - p| < \frac{1}{n}" />. As <InlineMath math="n" /> increases, <InlineMath math="x_n" />
        gets closer to <InlineMath math="p" />. However, the corresponding values <InlineMath math="f(x_n)" />
        do not get closer to <InlineMath math="Q" />. In fact, for all <InlineMath math="n" />, we have 
        <InlineMath math="|f(x_n) - Q| > \epsilon" />. This sequence vividly demonstrates that 
        <InlineMath math="f(x)" /> does not converge to <InlineMath math="Q" />.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Key Takeaways: The Epsilon-Delta Framework</h3>
      <p>
        The epsilon-delta definition of a limit is a precise way to describe how a function behaves near a point.
        When the limit exists, it guarantees that the function’s values can be made arbitrarily close to
        <InlineMath math="Q" /> by choosing inputs sufficiently close to <InlineMath math="p" />. If the limit
        does not exist, as in our example, we can construct sequences that fail to converge to the desired value.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Part 2: Continuity of Functions</h3>
      <p>
        Building on our understanding of limits, we now explore continuity—a fundamental concept in analysis. 
        Intuitively, a function is continuous if there are no "jumps" or "gaps" in its graph. Formally, we say
        <InlineMath math="f(x)" /> is continuous at a point <InlineMath math="p" /> if:
      </p>
      <BlockMath math="\lim_{x \to p} f(x) = f(p)" />

      <p>
        In simple terms, this means that the value of <InlineMath math="f(x)" /> at <InlineMath math="p" />
        is exactly what you would expect it to be based on the values of <InlineMath math="f(x)" /> near 
        <InlineMath math="p" />.
      </p>
      <hr className="my-4" />

      <h3 className="text-lg font-semibold">Formal Definition of Continuity</h3>
      <p>
        Let <InlineMath math="X" /> and <InlineMath math="Y" /> be metric spaces, and let 
        <InlineMath math="f: X \to Y" /> be a function. We say <InlineMath math="f" /> is continuous at a point 
        <InlineMath math="p \in X" /> if for every <InlineMath math="\epsilon > 0" />, there exists a 
        <InlineMath math="\delta > 0" /> such that for all <InlineMath math="x \in X" />:
      </p>
      <BlockMath math="d_X(x, p) < \delta \implies d_Y(f(x), f(p)) < \epsilon" />

      <p>
        Here’s what this means step by step:
      </p>
      <ol className="list-decimal ml-6 space-y-2">
        <li>
          <strong>Pick any <InlineMath math="\epsilon > 0" />:</strong> This represents how close we want 
          <InlineMath math="f(x)" /> to be to <InlineMath math="f(p)" />.
        </li>
        <li>
          <strong>Find a <InlineMath math="\delta > 0" />:</strong> This is the corresponding distance around 
          <InlineMath math="p" /> such that if <InlineMath math="x" /> is within <InlineMath math="\delta" /> of 
          <InlineMath math="p" />, then <InlineMath math="f(x)" /> will be within <InlineMath math="\epsilon" />
          of <InlineMath math="f(p)" />.
        </li>
        <li>
          <strong>Conclusion:</strong> If we can always find such a <InlineMath math="\delta" /> for every 
          <InlineMath math="\epsilon" />, then <InlineMath math="f" /> is continuous at <InlineMath math="p" />.
        </li>
      </ol>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Intuition Through Examples</h3>
      <p>
        Let’s illustrate continuity with some examples:
      </p>
      <ol className="list-decimal ml-6 space-y-2">
        <li>
          <strong>Continuous Function:</strong> Consider <InlineMath math="f(x) = x^2" />. For any point <InlineMath math="p" />, as 
          <InlineMath math="x" /> approaches <InlineMath math="p" />, <InlineMath math="f(x)" /> smoothly approaches <InlineMath math="p^2" />, 
          satisfying the epsilon-delta criterion.
        </li>
        <li>
          <strong>Discontinuous Function:</strong> Now consider a step function <InlineMath math="f(x)" /> defined as:
          <BlockMath math="f(x) = \begin{cases} 1 & \text{if } x < 0, \\ 0 & \text{if } x \geq 0. \end{cases}" />
          At <InlineMath math="x = 0" />, the function "jumps" from 1 to 0. No matter how small <InlineMath math="\delta" /> is, you 
          can’t ensure that <InlineMath math="f(x)" /> near 0 will stay close to <InlineMath math="f(0)" />, violating continuity.
        </li>
      </ol>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Continuity and Sequences</h3>
      <p>
        There’s another powerful way to understand continuity using sequences. A function <InlineMath math="f" /> is continuous at 
        <InlineMath math="p" /> if for every sequence <InlineMath math="\{x_n\}" /> that converges to <InlineMath math="p" />, the 
        sequence of images <InlineMath math="\{f(x_n)\}" /> converges to <InlineMath math="f(p)" />. This is written as:
      </p>
      <BlockMath math="\lim_{n \to \infty} f(x_n) = f\left(\lim_{n \to \infty} x_n\right)" />

      <p>
        This perspective is incredibly useful because it connects the continuity of functions to the properties of sequences, 
        which we’ve already studied.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Theorems About Continuous Functions</h3>
      <p>
        Continuity brings with it a host of powerful theorems:
      </p>
      <ol className="list-decimal ml-6 space-y-2">
        <li>
          <strong>Limits are Unique:</strong> If a function has a limit at a point, that limit is unique.
        </li>
        <li>
          <strong>Algebra of Continuous Functions:</strong> If <InlineMath math="f" /> and <InlineMath math="g" /> are continuous at 
          <InlineMath math="p" />, then:
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <InlineMath math="f + g" /> is continuous at <InlineMath math="p" />.
            </li>
            <li>
              <InlineMath math="f \cdot g" /> is continuous at <InlineMath math="p" />.
            </li>
            <li>
              <InlineMath math="\frac{f}{g}" /> is continuous at <InlineMath math="p" />, provided <InlineMath math="g(p) \neq 0" />.
            </li>
          </ul>
        </li>
        <li>
          <strong>Composition:</strong> If <InlineMath math="f" /> is continuous at <InlineMath math="p" /> and <InlineMath math="g" /> 
          is continuous at <InlineMath math="f(p)" />, then the composition <InlineMath math="g(f(x))" /> is continuous at 
          <InlineMath math="p" />.
        </li>
      </ol>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Final Thoughts</h3>
      <p>
        Understanding limits and continuity allows us to rigorously analyze the behavior of functions, both in theoretical and 
        practical contexts. These concepts not only provide the foundation for calculus but also permeate many areas of mathematics, 
        physics, and engineering. With this solid grasp of limits and continuity, we’re now prepared to explore even deeper 
        analytical structures, such as differentiability and integration.
      </p>
    </div>
  );
}
