import { InlineMath, BlockMath } from 'react-katex';

const StartTopology = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Chapter 1: Motivation and Foreshadowing</h1>
      <hr className="my-6" />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1.1 Introduction</h2>
        <p className="mb-4">
          Before diving into the world of topology, it’s helpful to look back at concepts you’ve likely encountered in previous math courses. Topology builds on familiar ideas but extends them in new, exciting ways. In this chapter, we’ll explore these foundational ideas and hint at how they evolve in topology.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1.2 Revisiting Key Concepts</h2>
        <h3 className="text-xl font-semibold mb-2">Open and Closed Intervals</h3>
        <p className="mb-4">
          You’ve probably come across open intervals like <InlineMath math="(a, b)" /> and closed intervals like <InlineMath math="[a, b]" /> on the real number line (<InlineMath math="\mathbb{R}" />). Let’s break this down:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Open interval <InlineMath math="(a, b)" /></strong>: Includes all numbers between <InlineMath math="a" /> and <InlineMath math="b" /> but <em>not</em> <InlineMath math="a" /> or <InlineMath math="b" /> themselves.
          </li>
          <li>
            <strong>Closed interval <InlineMath math="[a, b]" /></strong>: Includes all numbers between <InlineMath math="a" /> and <InlineMath math="b" />, <em>including</em> <InlineMath math="a" /> and <InlineMath math="b" />.
          </li>
        </ul>
        <p className="mb-4">
          Now, consider higher dimensions, like <InlineMath math="\mathbb{R}^2" /> (the plane) or <InlineMath math="\mathbb{R}^n" /> (general <InlineMath math="n" />-dimensional space). Here, the concept of open sets generalizes beyond simple intervals. Instead of just looking at points on a line, we think about "regions" in space.
        </p>
        <p className="mb-4">
          In topology, we aim to generalize the idea of open sets beyond <InlineMath math="\mathbb{R}^n" /> to any set. These open sets will play a central role throughout the course.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Continuity</h3>
        <p className="mb-4">
          From calculus, you might recall this definition of continuity:
        </p>
        <blockquote className="border-l-4 border-gray-400 pl-4 italic mb-4">
          A function <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}" /> is continuous at a point <InlineMath math="a \in \mathbb{R}^2" /> if, for every <InlineMath math="\epsilon > 0" />, there exists a <InlineMath math="\delta > 0" /> such that whenever <InlineMath math="\|x - a\| < \delta" />, it follows that <InlineMath math="|f(x) - f(a)| < \epsilon" />.
        </blockquote>
        <p className="mb-4">
          This definition involves distances (<InlineMath math="\|x - a\|" />), but topology offers a more abstract and powerful way to think about continuity—using <em>open sets</em>. In this framework, a function is continuous if it maps open sets to open sets. This perspective simplifies and generalizes the concept of continuity significantly.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Closeness Without Distance</h3>
        <p className="mb-4">
          In <InlineMath math="\mathbb{R}^n" />, we often measure how "close" two points are using a distance formula, like the Euclidean distance:
        </p>
        <BlockMath math="d(x, y) = \sqrt{(x_1 - y_1)^2 + \cdots + (x_n - y_n)^2}." />
        <p className="mb-4">
          But what if we’re in a situation where there’s no natural notion of distance? For instance, consider a social network: How "close" are two users? It depends on connections, not physical distance.
        </p>
        <p className="mb-4">
          Topology allows us to study "closeness" abstractly, even when no distance metric exists. This opens up new possibilities for studying relationships in diverse settings.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Convergence of Sequences</h3>
        <p className="mb-4">
          You’ve learned about sequence convergence:
        </p>
        <blockquote className="border-l-4 border-gray-400 pl-4 italic mb-4">
          A sequence <InlineMath math="\{x_n\}" /> in <InlineMath math="\mathbb{R}^n" /> converges to a point <InlineMath math="x" /> if, for every <InlineMath math="\epsilon > 0" />, there exists <InlineMath math="N \in \mathbb{N}" /> such that for all <InlineMath math="n > N" />, <InlineMath math="\|x_n - x\| < \epsilon" />.
        </blockquote>
        <p className="mb-4">
          In topology, we’ll redefine convergence without relying on distance. Instead, we’ll use the language of open sets, which provides a more flexible and general framework for understanding limits.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">"Nice" Subsets of <InlineMath math="\mathbb{R}^n" /></h3>
        <p className="mb-4">
          What makes a set "nice" to work with? In calculus, you might remember the <strong>Extreme Value Theorem</strong>:
        </p>
        <blockquote className="border-l-4 border-gray-400 pl-4 italic mb-4">
          If <InlineMath math="f" /> is continuous on a closed and bounded interval <InlineMath math="[a, b]" />, then <InlineMath math="f" /> attains its maximum and minimum values.
        </blockquote>
        <p className="mb-4">
          Here, "closed" and "bounded" are crucial. In topology, we’ll explore what it means for a set to be closed or bounded in a more general sense. This will allow us to extend powerful theorems like the Extreme Value Theorem to broader contexts.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1.3 Topologies in a Familiar Setting</h2>
        <h3 className="text-xl font-semibold mb-2">What is a Topology?</h3>
        <p className="mb-4">
          At its core, a topology is a way of specifying which subsets of a set <InlineMath math="X" /> are "open." These open sets must satisfy three simple properties:
        </p>
        <ol className="list-decimal ml-6 mb-4">
          <li>The set itself and the empty set are open.</li>
          <li>Unions of open sets are open.</li>
          <li>Finite intersections of open sets are open.</li>
        </ol>
        <p className="mb-4">
          These properties may seem abstract now, but they form the foundation of topology. Let’s explore this idea in the context of <InlineMath math="\mathbb{R}^n" />, where we already have an intuitive sense of open sets.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Open Sets in <InlineMath math="\mathbb{R}^n" /></h3>
        <p className="mb-4">
        Recall the <InlineMath math="\epsilon" />-ball around a point <InlineMath math="x \in \mathbb{R}^n" />:
      </p>
      <BlockMath math="B_\epsilon(x) = \{y \in \mathbb{R}^n : d(x, y) < \epsilon\}." />
      <p className="mb-4">
        Using <InlineMath math="\epsilon" />-balls, we define open sets in <InlineMath math="\mathbb{R}^n" />:
      </p>
      <blockquote className="border-l-4 border-gray-400 pl-4 italic mb-4">
        A set <InlineMath math="U \subset \mathbb{R}^n" /> is open if, for every point <InlineMath math="x \in U" />, there exists <InlineMath math="\epsilon > 0" /> such that <InlineMath math="B_\epsilon(x) \subset U" />.
      </blockquote>
      <p className="mb-4">
        This definition depends on the notion of distance, but as we’ll see, the three properties of open sets don’t rely on distance at all.
      </p>
    </section>
    <hr className="my-6" />

    <section className='mb-6'>
      <h2 className="text-2xl font-semibold mb-4">Key Properties of Open Sets</h2>
      <p className="mb-4">Here’s why the three properties of open sets are so important:</p>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">
          <InlineMath math="\emptyset" /> and <InlineMath math="\mathbb{R}^n" /> are open.
          <span className="block text-gray-600">These sets form the "bookends" of our topology.</span>
        </li>
        <li className="mb-2">
          Unions of open sets are open.
          <span className="block text-gray-600">Think of combining regions in space. If each region is open, their union is open, no matter how many regions you combine.</span>
        </li>
        <li className="mb-2">
          Finite intersections of open sets are open.
          <span className="block text-gray-600">Imagine overlapping a few open circles on a plane. The region where they all overlap is also open.</span>
        </li>
      </ol>
      <p className="mb-4">
        These properties ensure we can define things like continuity, convergence, and compactness without ever needing a distance function.
      </p>
      </section>
      <hr className="my-6" />

      <section className='mb-6'>
      <h2 className="text-2xl font-semibold mb-4">1.4 Topologies and Topological Spaces</h2>
      <h3 className="text-xl font-semibold mb-4">General Definition</h3>
      <p className="mb-4">Let’s generalize what we’ve learned:</p>
      <blockquote className="border-l-4 border-gray-400 pl-4 italic mb-4">
        A topology on a set <InlineMath math="X" /> is a collection <InlineMath math="\mathcal{T} \subset \mathcal{P}(X)" /> (the power set of <InlineMath math="X" />) satisfying:
        <ol className="list-decimal ml-6">
          <li className="mb-2">
            <InlineMath math="\emptyset \in \mathcal{T}" /> and <InlineMath math="X \in \mathcal{T}" />.
          </li>
          <li className="mb-2">
            <InlineMath math="\mathcal{T}" /> is closed under arbitrary unions.
          </li>
          <li className="mb-2">
            <InlineMath math="\mathcal{T}" /> is closed under finite intersections.
          </li>
        </ol>
      </blockquote>
      <p className="mb-4">
        A <strong>topological space</strong> is a pair <InlineMath math="(X, \mathcal{T})" />, where <InlineMath math="X" /> is a set and <InlineMath math="\mathcal{T}" /> is a topology on <InlineMath math="X" />.
      </p>
      </section>
      <hr className="my-6" />

      <section className='mb-6'>
      <h3 className="text-xl font-semibold mb-4">Examples of Topologies</h3>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">
          <strong>Usual Topology on <InlineMath math="\mathbb{R}" /></strong>
          <p className="ml-4 text-gray-600">
            Open sets are unions of open intervals, like <InlineMath math="(a, b)" /> or <InlineMath math="(-\infty, a) \cup (b, \infty)" />.
          </p>
        </li>
        <li className="mb-2">
          <strong>Discrete Topology</strong>
          <p className="ml-4 text-gray-600">
            Every subset of <InlineMath math="X" /> is open. This is the "finest" topology possible.
          </p>
        </li>
        <li className="mb-2">
          <strong>Indiscrete Topology</strong>
          <p className="ml-4 text-gray-600">
            Only <InlineMath math="\emptyset" /> and <InlineMath math="X" /> are open. This is the "coarsest" topology and rarely useful.
          </p>
        </li>
      </ol>
      </section>
      <hr className="my-6" />

      <section className='mb-6'>
      <h2 className="text-2xl font-semibold mb-4">1.5 Conclusion</h2>
      <p className="mb-4">
        This chapter introduces the key ideas behind topology, showing how it extends familiar concepts like open intervals, continuity, and convergence. By the end of this course, you’ll see how these abstract definitions allow us to tackle deep mathematical questions in various fields, from pure math to applied sciences.
      </p>
      </section>
    </div>
  )};

  export default StartTopology;