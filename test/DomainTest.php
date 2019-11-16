<?php

namespace Ivolo\DisposableEmail\Test;

use Ivolo\DisposableEmail\Domain;
use PHPUnit\Framework\TestCase;

class DomainTest extends TestCase
{
    public function testGetDomain()
    {
        $this->assertSame('localhost', Domain::getDomain('a@localhost'));
        $this->assertSame('local.host', Domain::getDomain('a@local.host'));
        $this->assertSame('gmail.com', Domain::getDomain('test@gmail.com'));
        $this->assertSame('jit.com.np', Domain::getDomain('hi@jit.com.np'));
    }

    public function testGetDomainThrows()
    {
        $this->expectException(\InvalidArgumentException::class);

        Domain::getDomain('@localhost');
    }

    public function testGetDomainThrows2()
    {
        $this->expectException(\InvalidArgumentException::class);

        Domain::getDomain('localhost');
    }

    public function testIsWildCard()
    {
        foreach ([
            'me@33m.co',
            'me@x.33m.co',
            'me@cko.kr',
            'me@abc.cko.kr',
        ] as $i => $email) {
            $this->assertTrue(Domain::isWildCard($email), "#$i | $email");
        }

        $this->assertFalse(Domain::isWildCard('me@xcko.kr'));
        $this->assertFalse(Domain::isWildCard('someone@example.com'));
    }

    public function testIsDisposable()
    {
        foreach ([
            'hi@zxxz.ml',
            'x@jto.kr',
            'y@crub.cf',
        ] as $i => $email) {
            $this->assertTrue(Domain::isDisposable($email), "#$i | $email");
        }

        $this->assertTrue(Domain::isDisposable('me@cko.kr', true));
        $this->assertTrue(Domain::isDisposable('me@x.cko.kr', true));
        $this->assertFalse(Domain::isDisposable('me@xcko.kr', false));
        $this->assertFalse(Domain::isDisposable('me@x.cko.kr', false));
        $this->assertFalse(Domain::isDisposable('someone@example.com', false));
        $this->assertFalse(Domain::isDisposable('someone@example.com', true));
    }
}
