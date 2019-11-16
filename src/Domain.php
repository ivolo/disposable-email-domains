<?php

namespace Ivolo\DisposableEmail;

class Domain
{
    protected static $wildcard;
    protected static $disposable;

    public static function getDomain(string $email): string
    {
        if (!strpos($email, '@')) {
            throw new \InvalidArgumentException('Email should contain @ character in second or more position');
        }

        $lastPart = strstr($email, '@');

        return substr($lastPart, 1);
    }

    public static function isWildcard(string $email): bool
    {
        $domain = static::getDomain($email);

        if (null === static::$wildcard) {
            static::$wildcard = static::loadJsonFile('wildcard');
        }

        foreach (static::$wildcard as $word) {
            // Match wildcard domain at the end
            if ($domain === $word || substr($domain, -1 - strlen($word)) === ".$word") {
                return true;
            }
        }

        return false;
    }

    public static function isDisposable(string $email, bool $wildcard = true): bool
    {
        if ($wildcard && static::isWildcard($email)) {
            return true;
        }

        $domain = static::getDomain($email);

        if (null === static::$disposable) {
            static::$disposable = array_flip(static::loadJsonFile('index'));
        }

        return isset(static::$disposable[$domain]);
    }

    private static function loadJsonFile(string $name): array
    {
        $file = __DIR__ . "/../$name.json";
        $data = json_decode(file_get_contents($file), true) ?: [];

        if (json_last_error() === JSON_ERROR_NONE) {
            return $data;
        }

        throw new \InvalidArgumentException('The given file does not contain valid json data');
    }
}
